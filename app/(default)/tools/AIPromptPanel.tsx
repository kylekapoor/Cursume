"use client";

import { useState } from "react";

interface Props {
  docSource: string;
  setDocSource: (val: string) => void;
  selectedText: string | null;
  setSelectedText: (val: string | null) => void;
}

export default function AIPromptPanel({ docSource, setDocSource, selectedText, setSelectedText }: Props) {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    // TODO: Call GPT here
    const fakeSuggestion = selectedText
      ? `Improved version of: ${selectedText}`
      : `Added note: ${input}`;

    setSuggestion(fakeSuggestion);
  };

  const handleAccept = () => {
    if (selectedText && suggestion) {
      const updated = docSource.replace(selectedText, suggestion);
      setDocSource(updated);
      setSuggestion(null);
      setSelectedText(null);
    }
  };

  const handleReject = () => {
    setSuggestion(null);
    setSelectedText(null);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 text-gray-700 text-sm space-y-4">
        {selectedText ? (
          <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
            <p className="font-semibold">Selected Text:</p>
            <p className="italic">{selectedText}</p>
          </div>
        ) : (
          <p className="text-gray-500 italic">Select a portion of the resume to edit or add a general prompt.</p>
        )}

        {suggestion && (
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <p className="font-semibold mb-2">💡 GPT Suggestion:</p>
            <p>{suggestion}</p>
            <div className="mt-2 flex space-x-3">
              <button
                onClick={handleAccept}
                className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
              >
                ✓ Accept
              </button>
              <button
                onClick={handleReject}
                className="bg-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-400"
              >
                ✕ Decline
              </button>
            </div>
          </div>
        )}
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
