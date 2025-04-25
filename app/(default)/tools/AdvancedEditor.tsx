"use client";

interface Props {
  fileType: "latex" | "word" | null;
  docSource: string;
  onChange: (val: string) => void;
}

export default function AdvancedEditor({ fileType, docSource, onChange }: Props) {
  return (
    <div className="h-full p-6 text-sm text-black">
      <h2 className="mb-2 font-semibold">
        Editing {fileType?.toUpperCase()} Source
      </h2>
      <textarea
        value={docSource}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full resize-none border border-gray-300 rounded-md p-4 bg-white text-sm font-mono"
        placeholder={`Paste your ${fileType} content here...`}
      />
    </div>
  );
}
