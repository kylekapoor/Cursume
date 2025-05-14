"use client";

import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { renderAsync } from "docx-preview";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Setup PDF worker
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface Props {
  fileType: "latex" | "word" | "pdf" | null;
  resumeHTML: string | ArrayBuffer;
  setSelectedText: (text: string | null) => void;
}

export default function ResumePreview({ fileType, resumeHTML }: Props) {
  const [textContent, setTextContent] = useState<string>("");

  // TipTap Editor setup
  const editor = useEditor({
    content: textContent,
    editable: false,
    extensions: [StarterKit],
  });

  // Extract content from uploaded file
  useEffect(() => {
    if (!resumeHTML || !fileType) return;

    const processDocx = async () => {
      const container = document.createElement("div");
      try {
        await renderAsync(resumeHTML as ArrayBuffer, container);
        setTextContent(container.innerText || "Unable to read .docx file");
      } catch (err) {
        console.error("Error parsing .docx", err);
        setTextContent("Failed to load Word document.");
      }
    };

    const processPDF = async () => {
      try {
        const pdf = await getDocument({ data: resumeHTML }).promise;
        let combinedText = "";
        for (let i = 0; i < pdf.numPages; i++) {
          const page = await pdf.getPage(i + 1);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: any) => item.str).join(" ");
          combinedText += pageText + "\n\n";
        }
        setTextContent(combinedText || "Unable to read PDF");
      } catch (err) {
        console.error("Error parsing PDF", err);
        setTextContent("Failed to load PDF document.");
      }
    };

    if (fileType === "word") processDocx();
    if (fileType === "pdf") processPDF();
    if (fileType === "latex" && typeof resumeHTML === "string") {
      setTextContent(resumeHTML);
    }
  }, [resumeHTML, fileType]);

  // Update TipTap content
  useEffect(() => {
    if (editor && textContent) {
      editor.commands.setContent(textContent);
    }
  }, [textContent, editor]);

  return (
    <div className="w-full h-full overflow-auto bg-gray-50 p-4">
      {editor ? (
        <EditorContent editor={editor} className="prose max-w-none bg-white p-4 border rounded-md" />
      ) : (
        <p>Loading preview...</p>
      )}
    </div>
  );
}