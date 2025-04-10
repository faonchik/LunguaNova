"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  questions: FAQItem[];
}

export function FAQ({ questions }: FAQProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-10 w-full max-w-[800px] mx-auto">
      <h2 className="w-[255px] mx-auto font-extrabold text-[#47b6f2] text-2xl tracking-[-0.48px] text-center mb-6">
        ВОПРОСЫ И ОТВЕТЫ
      </h2>
      <div className="w-[328px] mx-auto mb-12">
        {questions.map((item) => (
          <div
            key={item.id}
            className="mb-5 rounded-[15px] border-[3px] border-solid border-[#47b6f2] overflow-hidden transition-all duration-300"
          >
            <h3 className="flex">
              <button
                type="button"
                onClick={() => toggleQuestion(item.id)}
                aria-controls={`accordion-content-${item.id}`}
                aria-expanded={expandedQuestions.includes(item.id)}
                className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-4 hover:no-underline group"
              >
                <span className="font-extrabold text-[#47b6f2] text-xl tracking-[-0.40px] text-left">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#47b6f2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    expandedQuestions.includes(item.id) ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </h3>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={`grid transition-all duration-300 ease-in-out ${
                expandedQuestions.includes(item.id)
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4">
                  <p className="font-medium text-[#47b6f2] text-sm tracking-[-0.28px] whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
