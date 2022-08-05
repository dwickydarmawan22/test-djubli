import React from "react";
import carHeader from "../assets/img/car-1.png";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="py-16 px-4 bg-green-800 h-full">
        <div className="overflow-hidden relative">
          <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Dapatkan Mobil Impianmu</span>
              <span className="block text-lime-400">Hari ini atau tidak sama sekali</span>
            </h2>
            <p className="text-xl w-3/4 mt-4 text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates reiciendis eveniet explicabo, exercitationem saepe error ad iure mollitia sed totam excepturi ex nesciunt nisi enim soluta iusto laborum consectetur hic!
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <Link
                  to="/beli-mobil"
                  className="py-4 px-6  bg-green-500 hover:bg-green-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Beli Mobil
                </Link>
              </div>
            </div>
          </div>
          <img
            src={carHeader}
            className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
          />
        </div>
      </div>
      {/* ====== Brands Section Start */}
      <section className="bg-white py-10 grayscale">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap justify-center items-center">
                <div
                  className="
            w-[150px]
            2xl:w-[180px]
            py-5
            flex
            items-center
            justify-center
            mx-4
            "
                >
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                    alt="image"
                    className="w-full h-10"
                  />
                </div>
                <div
                  className="
            w-[150px]
            2xl:w-[180px]
            py-5
            flex
            items-center
            justify-center
            mx-4
            "
                >
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                    alt="image"
                    className="w-full h-10"
                  />
                </div>
                <div
                  className="
            w-[150px]
            2xl:w-[180px]
            py-5
            flex
            items-center
            justify-center
            mx-4
            "
                >
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                    alt="image"
                    className="w-full h-10"
                  />
                </div>
                <div
                  className="
            w-[150px]
            2xl:w-[180px]
            py-5
            flex
            items-center
            justify-center
            mx-4
            "
                >
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                    alt="image"
                    className="w-full h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};
