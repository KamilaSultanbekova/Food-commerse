import Notfound from "../assets/NotFound.png";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="text-center max-w-lg">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          src={Notfound}
          alt="Not Found"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl py-4 font-bold">
          That Page Can’t Be Found
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          It looks like nothing was found at this location. Maybe try to <br />
          search for what you are looking for?
        </p>

        <a
          href="/"
          className="bg-[#634C9F] text-white text-sm sm:text-base py-3 px-6 rounded-xl font-semibold hover:bg-[#4f3c7d] transition"
        >
          Go To Homepage
        </a>
      </div>
    </div>
  );
}
