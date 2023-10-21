export function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const height = document.getElementById("header").offsetHeight;
    const offset = -height; // Adjust this value to control the offset
    const elementPosition = targetElement.getBoundingClientRect().top;
    const bodyRect = document.body.getBoundingClientRect().top;
    const offsetPosition = elementPosition + bodyRect + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export const isActivePath = (currentPath) => {
  if (window.location.pathname === "/") {
    return "home" === currentPath.toLowerCase();
  }
  return (
    window.location.pathname.split("/")[1].split("-").join(" ") ===
    currentPath.toLowerCase()
  );
};

export const imageExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "tiff",
  "webp",
  "svg",
  "ico",
  "jfif",
  "exif",
  "raw",
  "heif",
  "bat",
];

export const videoExtensions = [
  "mp4",
  "avi",
  "mov",
  "mkv",
  "flv",
  "wmv",
  "webm",
  "3gp",
  "mpg",
  "m4v",
  "mp3",
  "ogg",
  "wav",
];

export const audioExtensions = [
  "mp3",
  "wav",
  "flac",
  "ogg",
  "wma",
  "m4a",
  "aac",
  "ac3",
  "aiff",
  "amr",
  "au",
  "mid",
  "midi",
  "ra",
  "rmi",
  "mka",
  "opus",
  "spx",
  "tta",
  "wv",
  "3ga",
  "adt",
  "adts",
  "cda",
  "eac3",
  "m4p",
  "m4r",
  "mp1",
  "mp2",
  "msv",
  "oga",
  "tak",
  "ts",
];

export const pdfExtensions = ["pdf"];

export const isFileValid = (title, extensions) => {
  const ext = title.split(".");
  return extensions.includes(ext[ext.length - 1]);
};

export const getAvailableheight = () => {
  const h = document.getElementById("header");
  const f = document.getElementById("footer");
  if (!h && !f) {
    return "100vh";
  } else if (!h && f) {
    return `100vh-${f.offsetHeight}px`;
  } else if (!f && h) {
    return `100vh-${f.offsetHeight}px`;
  }
  return `100vh-${h.offsetHeight + f.offsetHeight}px`;
};
