import React from "react";
import qoutesList from "../Quotes.json";

const Qoutes = () => {
  return (
    <>
      {qoutesList.map((quote, index) => (
        <div className="m-24" key={index}>
          <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {quote.quote}
            </h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {quote.author}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Qoutes;
