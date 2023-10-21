import { useState } from "react";
import { BuyCoffee, FileDropForm, MoreTools } from "../components";
import { DefaultLayout } from "../layouts";
import { imageExtensions, isFileValid } from "../utils";
import { useToastState } from "../context";
import { compressImage } from "../api";

export const CompressImage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useToastState();
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!isFileValid(file?.name, imageExtensions)) {
        dispatch({ type: "ERROR", payload: "Invalid file type" });
        throw new Error("Invalid file type");
      }
      const res = await compressImage(file);
      if (res?.status === 200) {
        const { mimetype, buffer, name } = res?.data;

        // Convert the buffer (array of bytes) to a base64-encoded data URL
        const arrayBufferView = new Uint8Array(buffer.data);
        const blob = new Blob([arrayBufferView], { type: mimetype });
        const imageUrl = URL.createObjectURL(blob);

        // Create a temporary anchor element for download
        const a = document.createElement("a");
        a.href = imageUrl;
        a.download = name;

        // Simulate a click event on the anchor to trigger the download
        a.click();

        // Clean up the temporary anchor
        URL.revokeObjectURL(imageUrl);
        dispatch({
          type: "SUCCESS",
          payload: "Image compression was successful",
        });
      }
    } catch (err) {
      console.error(new Error(err));
    } finally {
      setTimeout(() => {
        setFile(null);
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <DefaultLayout>
      <FileDropForm
        onSubmit={onSubmit}
        btn="Compress Image"
        file={file}
        setFile={setFile}
        loading={loading}
        title="Select image to compress"
        extensions={imageExtensions}
      />
      <MoreTools />
      <BuyCoffee />
    </DefaultLayout>
  );
};
