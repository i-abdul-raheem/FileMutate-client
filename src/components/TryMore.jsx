import { Link } from "react-router-dom";

export const TryMore = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Discover More Apps
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Link to="/" className="flex justify-center items-center">
            IDEA
          </Link>
          <Link to="/" className="flex justify-center items-center">
            DEED STATUS
          </Link>
          <Link to="/" className="flex justify-center items-center">
            AI CHATBOT
          </Link>
          <Link to="/" className="flex justify-center items-center">
            TEXT TO IMAGE
          </Link>
          <Link to="/" className="flex justify-center items-center">
            TEXT TO AUDIO
          </Link>
          <Link to="/" className="flex justify-center items-center">
            TEXT TO MUSIC
          </Link>
        </div>
      </div>
    </section>
  );
};
