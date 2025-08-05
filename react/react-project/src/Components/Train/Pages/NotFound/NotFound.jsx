import { Link } from "react-router-dom";
import Home from "../Home/Home";

const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-[100vh]">
        <div className="text-center">
          <h1 className="text-base font-semibold text-indigo-600">404</h1>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn t find the page you re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="rounded-md bg-indigo-600 p-2 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              to={"/"}
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
