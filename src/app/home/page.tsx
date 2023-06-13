import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"
import React from 'react'

const Home = () => {
    // Replace these values with your actual data
    const requests = 1234;
    const datasets = 5678;
    const contributions = 91011;
  return (
    <div>
      {/* <head>
        <title>Data Shelf</title>
      </head> */}
      <div className="flex">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4 '>
            <Search/>
              <h1 className="text-4xl font-bold mt-4 mb-4">Home</h1>
              <div className="bg-blue-500 py-8 text-white text-center">
                <h1 className="text-4xl font-bold">
                    Unlock the Power of Data Collection
                </h1>
                <p className="mt-4 text-lg">
                    Share, Contribute, and Get Paid with DATASHELF
                </p>
              </div>


              <div className="bg-gray-100 p-6 mt-10 mb-10">
      <div className="flex justify-around">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-500">{requests}</h2>
          <p className="text-gray-600">Requests</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-500">{datasets}</h2>
          <p className="text-gray-600">Datasets</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-500">{contributions}</h2>
          <p className="text-gray-600">Contributions</p>
        </div>
      </div>
    </div>




              <h3 className='font-semibold text-3xl justify-center'>Datasets</h3>
            
              <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="text-2xl mb-1 block leading-6 text-indigo-500">Title 1 UI</span>Completely unstyled, fully
                                accessible UI components</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                                    CSS.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/details_dataset">
                                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                                icons, by the makers of Tailwind CSS.</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                                    Vue libraries.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/dataset_detail">more
                                <span className="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                                patterns by the makers of Tailwind CSS.</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                                    projects.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/dataset_detail">
                                more<span className="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                </ul>
                <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-indigo-500">Title 1 UI</span>Completely unstyled, fully
                                accessible UI components</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                                    CSS.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/details_dataset">
                                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                                icons, by the makers of Tailwind CSS.</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                                    Vue libraries.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/dataset_detail">more
                                <span className="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                                patterns by the makers of Tailwind CSS.</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                                    projects.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/dataset_detail">
                                more<span className="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                </ul>
                <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-indigo-500">Title 1 UI</span>Completely unstyled, fully
                                accessible UI components</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                                    CSS.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/details_dataset">
                                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                                icons, by the makers of Tailwind CSS.</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                                    Vue libraries.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/dataset_detail">more
                                <span className="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                        <div className="order-1 sm:ml-6 xl:ml-0">
                            <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                                <span className="mb-1 block text-2xl leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                                patterns by the makers of Tailwind CSS.</h3>
                            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                                    projects.</p>
                            </div><a
                                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                                href="/dataset_detail">
                                more<span className="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span><svg
                                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg></a>
                        </div>
                    </li>
                </ul>



      </div>
      </div> 
      <Footer/>
    </div>
  )
}

export default Home;
