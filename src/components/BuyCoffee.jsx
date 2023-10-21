export const BuyCoffee = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Buy me a coffee
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            As a dedicated open-source contributor and full-stack developer,
            your coffee fuels my coding for the community!
          </p>
          <a
            href="https://www.buymeacoffee.com/arhex"
            target="_blank"
            rel="noreferrer"
            className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Keep the code flowing
          </a>
        </div>
      </div>
    </section>
  );
};
