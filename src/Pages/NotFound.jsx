import React from "react";
import Notfound from "../assets/NotFound.png";
export default function NotFound() {
  return (
    <div className="text-center mt-20 flex justify-center">
      <div>
        <img className="w-130" src={Notfound} />
        <h1 className="text-4xl  py-2 font-bold">That Page Cant Be Found</h1>
        <p className="text-gray-500 mt-2 py-2">
          It looks like nothing was found at this location. Maybe try to <br />
          search for what you are looking for?
        </p>
        <a
          href="/"
          className="text-white text-sm py-2 px-3 mb-4 rounded-xl font-semibold hover:bg-[#4f3c7d] mt-4 inline-block bg-[#634C9F]"
        >
          Go To Homepage
        </a>
      </div>
    </div>
  );
}
