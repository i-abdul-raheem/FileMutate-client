import { useRef } from "react";
import { FileDrop } from "react-file-drop";
import { Spinner } from "./Spinner";

export const FileDropForm = ({
  onSubmit,
  btn,
  file,
  setFile,
  loading,
  title,
  extensions,
}) => {
  const fileInputRef = useRef(null);
  const onFileInputChange = (event) => {
    const { files } = event.target;
    setFile(files[0]);
  };
  const onTargetClick = () => {
    fileInputRef.current.click();
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <h2 className="text-3xl font-semibold mb-3 text-black dark:text-white">
          {title}:
        </h2>
        <hr className="mb-5" />
        <form
          className="flex items-center justify-center w-full flex-col"
          id="file-input-form"
          onSubmit={onSubmit}
        >
          <input
            onChange={onFileInputChange}
            ref={fileInputRef}
            type="file"
            className="hidden"
          />
          <FileDrop
            onDrop={(files) => {
              setFile(files[0]);
            }}
            className="flex mb-3 flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            {!file ? (
              <div
                onClick={() => {
                  onTargetClick();
                }}
                className="flex flex-col items-center justify-center pt-5 pb-6"
                title={`Available Extensions: ${extensions.toString()}`}
              >
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to select</span> or drag
                  and drop
                </p>
              </div>
            ) : (
              <div className="relative flex flex-col gap-2 items-center dark:bg-gray-800 bg-white p-5 rounded-lg">
                <svg
                  onClick={() => {
                    setFile(null);
                    document.getElementById("file-input-form").reset();
                  }}
                  className="absolute top-[-8px] right-[-8px] w-6 h-6 text-red-500 dark:bg-gray-800 bg-white rounded-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
                <svg
                  className="w-20 h-20 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"
                  />
                </svg>
                <span className="text-gray-800 dark:text-white">
                  {file?.name}
                </span>
              </div>
            )}
          </FileDrop>
          {extensions && (
            <span className="w-full mb-3 bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
              <b>Available Extensions:</b> .{extensions?.join(", .")}
            </span>
          )}
          <button
            disabled={loading || !file}
            className="w-full flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="submit"
          >
            {loading && (
              <span className="mr-1">
                <Spinner />
              </span>
            )}
            <span>{btn}</span>
          </button>
        </form>
      </div>
    </section>
  );
};
