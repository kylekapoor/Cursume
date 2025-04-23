"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
  {items.map((item, index) => {
    const isOpen = openIndex === index;

    return (
      <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
        <button
          className="w-full px-4 py-3 text-left text-white font-medium focus:outline-none"
          onClick={() => toggle(index)}
        >
          {item.title}
        </button>
        <div
          className={`
            px-4 text-gray-300 border-t border-gray-700 bg-gray-900 text-left transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'}
          `}
          style={{ transitionProperty: 'max-height, padding' }}
        >
          <div className="overflow-hidden">
            {item.content}
          </div>
        </div>
      </div>
    );
  })}
</div>

  );
}
