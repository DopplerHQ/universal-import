import DopplerImportButton from "@dopplerhq/universal-import-react";
import { nanoid } from "nanoid";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <aside
        className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
        style={{
          boxShadow: "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)",
        }}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <span className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">Payment Hub</span>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-4">Home</span>
              </span>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
                <span className="ml-4">Checkout Builder</span>
              </span>
            </li>
            <li className="relative px-6 py-3">
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span className="ml-4">Cards</span>
              </span>
            </li>
            <li className="relative px-6 py-3">
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                <span className="ml-4">Reports</span>
              </span>
            </li>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <span className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150   dark:text-gray-100">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span className="ml-4">API Keys</span>
              </span>
            </li>
          </ul>
        </div>
      </aside>
      <div
        className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
        style={{ display: "none" }}
      ></div>
      <aside
        className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        style={{ display: "none" }}
      />
      <div className="flex flex-col flex-1">
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <button
              className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="flex justify-center flex-1 lg:mr-32">
              <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  aria-label="Search"
                  placeholder="Search transactions"
                  disabled
                />
              </div>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              <li className="relative">
                <button
                  className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                  aria-label="Notifications"
                  aria-haspopup="true"
                >
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                  ></span>
                </button>
              </li>
              <li className="relative">
                <button
                  className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">API Keys</h2>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Production</h4>

            <div className="w-full overflow-hidden rounded-lg shadow-md dark:bg-gray-800">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                      style={{ tableLayout: "fixed" }}
                    >
                      <th className="px-4 py-3">Key</th>
                      <th className="px-4 py-3" style={{ width: 300 }}>
                        Scope
                      </th>
                      <th className="px-4 py-3" style={{ width: 210 }}>
                        Button
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">PROD_PAYMENT_PROCESSING</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Read, Write
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">24px</span>
                        <DopplerImportButton
                          secretName="PROD_PAYMENT_PROCESSING"
                          secretValue={nanoid()}
                          height={24}
                        />
                      </td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">PROD_CHARGEBACKS</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Read, Write
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">28px</span>
                        <DopplerImportButton
                          secretName="PROD_CHARGEBACKS"
                          secretValue={nanoid()}
                          height={28}
                        />
                      </td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">PROD_READ_ONLY</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                          Read
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">30px</span>
                        <DopplerImportButton secretName="PROD_READ_ONLY" secretValue={nanoid()} height={30} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                <span className="flex items-center col-span-3">Showing 1 - 3 of 3</span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end"></span>
              </div>
            </div>
            <h4 className="mb-4 mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">Testing</h4>
            <div className="w-full overflow-hidden rounded-lg shadow-md dark:bg-gray-800">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">Key</th>
                      <th className="px-4 py-3" style={{ width: 300 }}>
                        Scope
                      </th>
                      <th className="px-4 py-3" style={{ width: 210 }}>
                        Button
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">TEST_PAYMENT_PROCESSING</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Read, Write
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">32px</span>
                        <DopplerImportButton
                          secretName="TEST_PAYMENT_PROCESSING"
                          secretValue={nanoid()}
                          height={32}
                        />
                      </td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">TEST_CHARGEBACKS</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Read, Write
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">34px</span>
                        <DopplerImportButton
                          secretName="TEST_CHARGEBACKS"
                          secretValue={nanoid()}
                          height={34}
                        />
                      </td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">TEST_READ_ONLY</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                          Read
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">36px</span>
                        <DopplerImportButton secretName="TEST_READ_ONLY" secretValue={nanoid()} height={36} />
                      </td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">TEST_READ_ONLY_2</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                          Read
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm flex items-center align-right">
                        <span className="mr-6">38px</span>
                        <DopplerImportButton
                          secretName="TEST_READ_ONLY_2"
                          secretValue={nanoid()}
                          height={38}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                <span className="flex items-center col-span-3">Showing 1 - 3 of 3</span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end"></span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
