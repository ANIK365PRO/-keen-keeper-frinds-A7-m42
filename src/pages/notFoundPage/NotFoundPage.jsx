import React from 'react';
import { Link } from 'react-router';
import { FaHome} from "react-icons/fa";
import { CiWarning } from 'react-icons/ci';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-4">

      <div  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">

        
         <div  className="bg-red-500/20 p-4 rounded-full w-fit mx-auto">
            <CiWarning />
        </div>
    

        <h1 className="text-6xl md:text-8xl font-bold">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className=" mt-2 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* button */}

        <Link
          to="/"
          className="btn mt-6 px-6 py-3  rounded-lg bg-white text-black flex items-center justify-center gap-3 w-fit mx-auto font-medium hover:scale-105 transition"
        >
            <FaHome></FaHome> Go Home
         
        </Link>

      </div>

    </div>
  );
};

export default NotFoundPage;