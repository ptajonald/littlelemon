import Footer from "../components/Footer";

function Reservations() {
  return (
    <>
      <div>
        <h1>Make A Reservation</h1>
        <p>
          Please fill in the form below to make a reservation at the Little
          Lemon Cleveland restaurant
        </p>
        <form action="#" class="flex flex-col items-center">
          <section class="guest-info">
            <h1 class="font-prime font-medium text-[3.5rem]">
              Customer Infomation
            </h1>
            <section class="data-inp w-[50vw]">
              <div class="flex justify-between">
                <label for="name">Name</label>
              </div>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                class="form-input"
                value=""
              />
            </section>
            <section class="data-inp w-[50vw]">
              <div class="flex justify-between">
                <label for="email">Email Address</label>
              </div>
              <input
                name="email"
                type="text"
                id="email"
                placeholder="e.g. stephenking@gmail.com"
                class="form-input"
                value=""
              />
            </section>
            <section class="data-inp w-[50vw]">
              <div class="flex justify-between">
                <label for="phone">Phone Number</label>
              </div>
              <input
                name="phone"
                type="text"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                class="form-input"
                value=""
              />
            </section>
          </section>
          <section class="guest-info pt-0">
            <h1 class="font-prime font-medium text-[3.5rem]">
              Reservation Details
            </h1>
            <section class="flex gap-10 w-max mt-4">
              <section class="data-inp">
                <label for="date">Select a date</label>
                <div class="flex w-[30vw]">
                  <input
                    type="text"
                    class="date-input"
                    placeholder="Select a date"
                    autocomplete="off"
                    role="presentation"
                    value=""
                  />
                  <button
                    type="button"
                    class="calendar relative p-3 bg-sec_1 border-2 border-sec_1 rounded-r-lg"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      ></path>
                    </svg>
                  </button>
                  <div class="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden">
                    <div class="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"></div>
                    <div class="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
                      <div class="flex flex-col lg:flex-row py-2">
                        <div class="flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 md:pl-1 pr-2 lg:pr-1">
                          <div class="w-full md:w-[296px] md:min-w-[296px]">
                            <div class="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                              <div class="flex-none">
                                <button
                                  type="button"
                                  class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                >
                                  <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                              <div class="flex flex-1 items-center space-x-1.5">
                                <div class="w-1/2">
                                  <button
                                    type="button"
                                    class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                  >
                                    Nov
                                  </button>
                                </div>
                                <div class="w-1/2">
                                  <button
                                    type="button"
                                    class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                  >
                                    2025
                                  </button>
                                </div>
                              </div>
                              <div class="flex-none">
                                <button
                                  type="button"
                                  class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                >
                                  <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                              <div class="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                                <div class="tracking-wide text-gray-500 text-center">
                                  Sun
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Mon
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Tue
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Wed
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Thu
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Fri
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Sat
                                </div>
                              </div>
                              <div class="grid grid-cols-7 gap-y-0.5 my-1">
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through text-gray-400"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through text-gray-400"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through text-gray-400"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through text-gray-400"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through text-gray-400"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through text-gray-400"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  3
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  4
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  5
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  6
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  7
                                </button>
                                <button
                                  type="button"
                                  disabled=""
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 line-through"
                                >
                                  8
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-blue-500"
                                >
                                  9
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  10
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  11
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  12
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  13
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  14
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  15
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  16
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  17
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  18
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  19
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  20
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  21
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  22
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  23
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  24
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  25
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  3
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  4
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  5
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  6
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="flex items-center">
                            <div class="bg-blue-500 h-7 w-1 rounded-full hidden md:block bg-blue-500"></div>
                          </div>
                          <div class="w-full md:w-[296px] md:min-w-[296px]">
                            <div class="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5">
                              <div class="flex-none">
                                <button
                                  type="button"
                                  class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                >
                                  <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                              <div class="flex flex-1 items-center space-x-1.5">
                                <div class="w-1/2">
                                  <button
                                    type="button"
                                    class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                  >
                                    Dec
                                  </button>
                                </div>
                                <div class="w-1/2">
                                  <button
                                    type="button"
                                    class="w-full tracking-wide dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 px-3 py-[0.55rem] uppercase hover:bg-gray-100 rounded-md focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                  >
                                    2025
                                  </button>
                                </div>
                              </div>
                              <div class="flex-none">
                                <button
                                  type="button"
                                  class="dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10  transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-blue-500/50 focus:bg-blue-100/50 "
                                >
                                  <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
                              <div class="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
                                <div class="tracking-wide text-gray-500 text-center">
                                  Sun
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Mon
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Tue
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Wed
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Thu
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Fri
                                </div>
                                <div class="tracking-wide text-gray-500 text-center">
                                  Sat
                                </div>
                              </div>
                              <div class="grid grid-cols-7 gap-y-0.5 my-1">
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  3
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  4
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  5
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  6
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  7
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  8
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  9
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  10
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  11
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  12
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  13
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  14
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  15
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  16
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  17
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  18
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  19
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  20
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  21
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  22
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  23
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  24
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  25
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  3
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  4
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  5
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  6
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  7
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  8
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  9
                                </button>
                                <button
                                  type="button"
                                  class="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-gray-400"
                                >
                                  10
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="data-inp">
                <label for="time">Select a time</label>
                <section class="flex items-center">
                  <select
                    name="time"
                    id="time"
                    placeholder="Select a time"
                    class="select"
                  >
                    <option value="" hidden="">
                      Select a time
                    </option>
                    <option value="9:30">9:30</option>
                    <option value="10:30">10:30</option>
                    <option value="11:30">11:30</option>
                    <option value="12:30">12:30</option>
                    <option value="13:30">13:30</option>
                    <option value="14:30">14:30</option>
                    <option value="15:30">15:30</option>
                    <option value="16:30">16:30</option>
                    <option value="17:30">17:30</option>
                    <option value="18:30">18:30</option>
                    <option value="19:30">19:30</option>
                    <option value="20:30">20:30</option>
                  </select>
                  <span class="relative right-8 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="svg-inline--fa fa-caret-down fa-lg "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      color="#495e57"
                    >
                      <path
                        fill="currentColor"
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                      ></path>
                    </svg>
                  </span>
                </section>
              </section>
              <section class="data-inp">
                <label for="guests">Guests number</label>
                <section class="flex items-center">
                  <input
                    name="no_guests"
                    type="number"
                    id="guests"
                    placeholder="Number of guests"
                    class="select"
                    value=""
                  />
                </section>
              </section>
            </section>
            <section class="data-inp w-[50vw]">
              <div class="flex justify-between">
                <label for="occasion">Occasion</label>
              </div>
              <input
                name="occasion"
                type="text"
                id="occasion"
                placeholder="Purpose of the reservation"
                class="form-input"
                value=""
              />
            </section>
            <section class="data-inp w-[50vw]">
              <div class="flex justify-between">
                <label for="special_req">Special Requests</label>
              </div>
              <input
                name="special_req"
                type="textarea"
                id="special_req"
                placeholder="Special requests for the reservation"
                class="form-input"
                value=""
              />
            </section>
          </section>
          <section class="confirm">
            <button
              type="submit"
              class="flex gap-4 items-center font-prime font-semibold text-[2rem] text-high_1 bg-primary tracking-wide px-10 py-4 rounded-full disabled:opacity-50"
              disabled=""
            >
              Confirm Reservation
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                class="svg-inline--fa fa-arrow-right "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>
            </button>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Reservations;
