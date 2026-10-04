"use client";

import { useId, useState } from "react";

type ReadMoreProps = {
  text: string;
  className?: string;
};

export default function ReadMore({ text, className = "" }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <div className={`contents ${className}`}>
      <button
        type="button"
        aria-controls={detailsId}
        aria-expanded={isExpanded}
        className="min-h-11 shrink-0 rounded px-2 text-xs font-semibold text-primary underline underline-offset-2 hover:bg-primary/10"
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
      <p
        id={detailsId}
        className={`${isExpanded ? "block" : "hidden"} basis-full whitespace-pre-line text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm`}
      >
        {text}
      </p>
    </div>
  );
}