const _env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  RAPID_API_KEY: process.env.RAPID_API_KEY,
  RAPID_API_HOST: process.env.RAPID_API_HOST,
  DEFAULT_LANGUAGE: process.env.NEXT_PUBLIC_LANG || "en",
};

export const env = Object.freeze(_env);
