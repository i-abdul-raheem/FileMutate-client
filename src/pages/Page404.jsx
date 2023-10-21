import { Link } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import { getAvailableheight } from "../utils";
import { useEffect, useState } from "react";

export const Page404 = () => {
  const [height, setHeight] = useState(getAvailableheight());
  useEffect(() => {
    setHeight(getAvailableheight());
  }, []);
  return (
    <DefaultLayout>
      <section className={`bg-white dark:bg-gray-900 min-h-[calc(${height})]`}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to={"/"}
              className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
