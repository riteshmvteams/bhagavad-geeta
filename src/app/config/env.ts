const _env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  RAPID_API_KEY: process.env.RAPID_API_KEY,
  RAPID_API_HOST: process.env.RAPID_API_HOST,
};

export const env = Object.freeze(_env);
