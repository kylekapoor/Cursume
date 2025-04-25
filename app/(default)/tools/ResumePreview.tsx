"use client";

interface Props {
  resumeHTML: string;
}

export default function ResumePreview({ resumeHTML }: Props) {
  return (
    <div className="h-full overflow-y-auto bg-gray-50 p-8">
      <div
        className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl mx-auto text-sm text-gray-800"
        dangerouslySetInnerHTML={{ __html: resumeHTML }}
      />
    </div>
  );
}
