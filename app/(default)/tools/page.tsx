"use client";

import { useEffect, useState, useRef } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import AIPromptPanel from "./AIPromptPanel";
import ResumePreview from "./ResumePreview";
import AdvancedEditor from "./AdvancedEditor";

export default function ToolsPage() {
  const [mounted, setMounted] = useState(false);
  const [filename, setFilename] = useState("Untitled Resume");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [fileType, setFileType] = useState<"latex" | "word" | "pdf" | null>(null);
  const [docSource, setDocSource] = useState<string | ArrayBuffer>("");  
  const [selection, setSelection] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => setMounted(true), []);

  const handleDownload = () => {
    console.log(`Downloading as ${filename}.pdf`);
    // TODO: Add actual PDF generation and download logic
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop()?.toLowerCase();

    if (fileExt === "pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        setFileType("pdf");
        setDocSource(reader.result as ArrayBuffer);
        setShowUploadModal(false);
      };
      reader.readAsArrayBuffer(file);
      return;
    }

    if (fileExt === "docx") {
      const reader = new FileReader();
      reader.onload = () => {
        setFileType("word");
        setDocSource(reader.result as ArrayBuffer);
        setShowUploadModal(false);
      };
      reader.readAsArrayBuffer(file);
      return;
    }

    if (fileExt === "tex") {
      const reader = new FileReader();
      reader.onload = () => {
        setFileType("latex");
        setDocSource(reader.result as string);
        setShowUploadModal(false);
      };
      reader.readAsText(file);
      return;
    }

    alert("Unsupported file type.");
  };

  if (!mounted) return null;

  return (
    <div className="h-screen w-full bg-[#f8f8f8] text-black overflow-hidden flex flex-col font-sans">
      <div className="w-full h-14 flex items-center justify-between px-6 bg-white border-b border-gray-200 shadow-sm relative">
        <Link href="/" className="text-lg font-semibold tracking-wide z-10">Cursume</Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="Rename File"
            className="px-3 py-1 text-sm text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-3 z-10">
          <button onClick={() => setShowUploadModal(true)} className="text-sm px-3 py-1.5 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100">
            Upload
          </button>
          <button onClick={handleDownload} className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-900 text-sm">
            Download
          </button>
          <button onClick={() => setAdvancedMode(prev => !prev)} className="text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
            {advancedMode ? "✕ Close Advanced" : "Advanced"}
          </button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md relative">
            <button className="absolute top-2 right-3 text-gray-400 hover:text-black" onClick={() => setShowUploadModal(false)}>✕</button>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Upload A Resume</h2>
            <p className="text-sm text-gray-600 mb-3">Supported File Types: PDF (.pdf), Word (.docx), LaTeX (.tex)</p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.tex,.docx"
              onChange={handleFileUpload}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-3 file:py-1 file:px-3 file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 h-full border-r border-gray-200 bg-white">
        {(fileType === "latex" || fileType === "word") && advancedMode ? (
          <AdvancedEditor
            fileType={fileType}
            docSource={typeof docSource === "string" ? docSource : ""}
            onChange={setDocSource}
          />
        ) : (
          <AIPromptPanel
            docSource={typeof docSource === "string" ? docSource : ""}
            setDocSource={setDocSource}
            selectedText={selection}
            setSelectedText={setSelection}
          />
        )}

        </div>
        <div className="w-1/2 h-full">
          <ResumePreview
            fileType={fileType}
            resumeHTML={docSource}
            setSelectedText={setSelection}
          />
        </div>
      </div>
    </div>
  );
}
