import React from "react";
import Logo from "../assets/img/logo-white.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="py-5 px-16 text-gray-100 bg-green-800 dark:bg-gray-800 my-12">
        <div className="flex flex-col sm:flex-row justify-between pt-8">
          <div className="w-full sm:w-1/2">
            <h1 className="text-2xl text-white font-bold xl:text-4xl sm:text-3xl md:mr-8">
              Buy and Sell Car in Easy Way
            </h1>
            <div className="mt-6 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
  <a href="#" className="w-full sm:w-auto bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
    <div className="text-left">
      <div className="mb-1 text-xs">Download on the</div>
      <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
    </div>
  </a>
  <a href="#" className="w-full sm:w-auto bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
    <div className="text-left">
      <div className="mb-1 text-xs">Get in on</div>
      <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
    </div>
  </a>
</div>

          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-sm">
              Djubli adalah platform jual beli mobil baru dan bekas berbasis
              aplikasi digital, mulai beroperasai sejak juni 2021, berkantor
              pusat di Jakarta yang sampai saat ini sudah mencapai ribuan unit
              listing mencakup area kota-kota besar Indonesia.
            </p>
          </div>
        </div>
        <hr className="h-px mt-6 mx-6 border-none" />
        <div className="w-full inline-flex mt-12 items-center justify-center mx-auto text-xl font-semibold">
          <img
            src={Logo}
            alt="logo djubli"
            className="w-80 h-20 items-center"
          />
        </div>
        <ul className="w-full justify-center flex flex-col text-center sm:flex-row mx-auto space-y-2 sm:space-y-0 sm:space-x-2 mt-6 overflow-hidden">
          <Link to="/" className="sm:px-4 text-gray-300 hover:text-gray-50">
            Beranda
          </Link>
          <Link
            to="/beli-mobil"
            className="sm:px-4 text-gray-300 hover:text-gray-50"
          >
            Beli Mobil
          </Link>
          <Link
            to="/jual-mobil"
            className="sm:px-4 text-gray-300 hover:text-gray-50"
          >
            Jual Mobil
          </Link>
        </ul>
        <div className="items-center justify-between mt-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
            <button className="text-gray-300 hover:text-gray-200 p-1 sm:p-2 inline-flex items-center dark:hover:text-gray-300">
              <svg
                className="w-7 h-7 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-gray-200 p-1 sm:p-2 inline-flex items-center dark:hover:text-gray-300">
              <svg
                className="w-7 h-7 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </button>
            <button className="text-gray-300 hover:text-gray-200  p-1 sm:p-2  inline-flex items-center dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
          <div className="mx-auto py-5 text-sm text-gray-400 text-center">
            Copyright 2022 @ Dwicky Darmawan
          </div>
        </div>
      </footer>
    </>
  );
};
