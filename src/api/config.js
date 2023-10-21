export const BASE_URL =
  process.env.REACT_APP_ENV === "local"
    ? "http://localhost:5000/api/v1"
    : "https://file-mutate-api.vercel.app/api/v1";
