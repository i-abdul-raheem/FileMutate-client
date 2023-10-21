import { BASE_URL } from "./config";

const endpoint = `${BASE_URL}/compress-image`;

export const compressImage = (image) => {
  const formData = new FormData();
  formData.append("avatar", image);
  return fetch(endpoint, { method: "POST", body: formData })
    .then((res) => res.json())
    .catch((err) => console.error(new Error(err?.toString())));
};
