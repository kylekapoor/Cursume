"use client";

import { useState } from "react";

interface Props {
  docSource: string;
  setDocSource: (val: string) => void;
}

export default function AIPromptPanel({ docSource, setDocSource }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newContent = docSource + `\n\n% AI Suggestion: ${input}`;
    setDocSource(newContent);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 text-gray-700 text-sm space-y-4">
        <p>💬 <strong>AI:</strong> Let's improve your resume...</p>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>Optimize wording for technical skills</li>
          <li>Adjust section titles</li>
        </ul>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 flex items-center bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSend}
          className="ml-4 px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-900"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
