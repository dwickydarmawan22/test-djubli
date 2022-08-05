import React from "react";
import CarFeatures from "../assets/img/car-2.png"

export const Features = () => {
  return (
    <>
      {/* How it work section start */}
      <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
        <div className="mb-16 text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Cara Membeli
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            3 Langkah Mudah
          </p>
        </div>
        <div className="flex flex-wrap my-12 dark:text-white">
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <svg
                width={20}
                height={20}
                fill="currentColor"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Isi Data Pribadi</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam accusantium ipsum asperiores accusamus beatae repudiandae, non illo! Illo nesciunt optio itaque laudantium, quod aliquam suscipit nihil quasi omnis! Adipisci.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <svg
                width={20}
                height={20}
                fill="currentColor"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Pilih Mobil</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nobis. Asperiores natus quia officiis nam vel repellendus dolorum ea culpa assumenda quisquam et voluptatibus quam porro voluptatem animi, quas consequatur?
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <svg
                width={20}
                height={20}
                fill="currentColor"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Pilih Pembayaran</div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolore officiis velit eius quaerat dolorem, provident modi accusantium similique doloremque enim dolorum, aperiam consectetur. Suscipit asperiores nam corrupti architecto odio.
            </p>
          </div>
        </div>
      </div>
      {/*  How it work section end */}

      {/* Advantages section start */}
      <div className="relative bg-white dark:bg-gray-800 p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
              Kenapa Harus Djubli
            </h4>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                      Pelayanan Cepat
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae ullam qui ratione corrupti doloremque eligendi porro, asperiores ipsum, enim accusantium officiis dolorum magnam rem natus officia quam libero rerum!
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                      Kualitas Terjamin
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsa quasi omnis ducimus nemo provident labore a velit recusandae impedit dolore odit, quae, excepturi neque! Quisquam inventore similique saepe voluptas?
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                      Harga Terbaik
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, alias voluptatibus distinctio quo et ab culpa, soluta corrupti amet maiores voluptas dolor doloribus. Possimus ducimus, nobis laudantium provident in amet.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <img
              src={CarFeatures}
              alt="CarFeatures"
              className="relative mx-auto w-auto"
            />
          </div>
        </div>
      </div>
      {/*  Advantages section end */}
    </>
  );
};
