import React from "react";
import Constant from "../_utils/Constant";

function Hero() {
  return (
    <section className="bg-gray-50 flex flex-col justify-center items-center min-h-screen px-4 py-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="text-primary">Upload, Save </span>and easily{" "}
          <span className="text-primary">Share </span>your files in one place
        </h1>
        <p className="mt-4 text-lg text-gray-500">{Constant.desc}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block rounded bg-primary px-8 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
          <a
            className="block rounded px-8 py-3 text-sm font-medium text-primary shadow hover:text-primary sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
