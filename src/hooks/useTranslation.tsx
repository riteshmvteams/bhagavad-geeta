import { env } from "@/app/config/env";
import { useState } from "react";

const useTranslation = () => {
  const [lang, setLang] = useState(env.DEFAULT_LANGUAGE || "en");

  const changeLanguage = (val: "hi" | "en") => {
    setLang(val);
  };

  return { lang, changeLanguage };
};

export default useTranslation;
