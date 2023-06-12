import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"
import Filter from "../searchsort/page"

export default function Requests() {
  return (
    <div>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-7 mt-4">
          <h1 className="col-span-4 font-bold text-4xl mt-3 mb-2 ">Requests</h1>
          <a className="col-span-3 flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/create_request">
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              + New Requests
            </button>
          </a>
        </div>
              <Filter/>

<div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3 mb-5 ml-16">
    <div className="md:flex">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Flowers</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in
                some sunshine? We have a list of places to do just that.
            </p>
            <h1 className="mt-2 text-start font-semibold">David Jhon</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6 mr-3">
            Image Data Type</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            79/200 collected</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            2birr/data</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            07/20/2023 due date</h1>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="/details_request">
                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path></svg>
            </a>

        </div>
    </div>
</div>

<div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5 ml-16">
    <div className="md:flex">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in
                some sunshine? We have a list of places to do just that.
            </p>
            <h1 className="mt-2 text-start font-semibold">David Jhon</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6 mr-3">
            Image Data Type</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            79/200 collected</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            2birr/data</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            07/20/2023 due date</h1>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="/details_request">
                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path></svg>
            </a>
        </div>
    </div>
</div>

<div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5 ml-16">
    <div className="md:flex">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in
                some sunshine? We have a list of places to do just that.
            </p>
            <h1 className="mt-2 text-start font-semibold">David Jhon</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6 mr-3">
            Image Data Type</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            79/200 collected</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            2birr/data</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            07/20/2023 due date</h1>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="/details_request">
                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path></svg>
            </a>
        </div>
    </div>
</div>

<div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5 ml-16">
    <div className="md:flex">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in
                some sunshine? We have a list of places to do just that.
            </p>
            <h1 className="mt-2 text-start font-semibold">David Jhon</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6 mr-3">
            Image Data Type</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            79/200 collected</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            2birr/data</h1>
            <h1 className="inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mr-3">
            07/20/2023 due date</h1>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="/details_request">
                more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                    className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path></svg>
            </a>
        </div>
    </div>
</div>

        
<nav aria-label="Page navigation example">
    <ul className="mt-10 list-style-none flex justify-center text-blue-500">
      <li>
        <a
          className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-blue-500 transition-all duration-300 dark:text-neutral-400"
          >Previous</a>
      </li>
      <li>
        <a
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
          >1</a>
      </li>
      <li aria-current="page">
        <a
          className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
          href="#!"
          >2
          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
            >(current)</span>
        </a>
      </li>
      <li>
        <a
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
          >3</a>
      </li>
      <li>
        <a
          className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-blue-500 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
          >Next</a>
      </li>
    </ul>
  </nav>


            </div>
      </div> 
      <Footer/>
    </div>
  )
}
