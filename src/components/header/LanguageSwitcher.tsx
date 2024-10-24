"use client";

import useTranslation from "@/hooks/useTranslation";

export default function LanguageSwitcher() {
  const { changeLanguage } = useTranslation();
  return (
    <div className="flex gap-1 items-center">
      <button
        className="font-lexend px-3 py-1.5 rounded-md"
        onClick={() => changeLanguage("hi")}
      >
        HI
      </button>
      <button
        className="font-lexend px-3 py-1.5 rounded-md"
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
