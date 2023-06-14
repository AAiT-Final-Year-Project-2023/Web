import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"
import Filter from "../searchsort/page"

export default function Dataset() {
  return (
    <div>
      <div className="flex w-full"
      >
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
        <h1 className="font-bold text-4xl mt-3 mb-2">Datasets</h1>
        <Filter/>
              
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                          <span className="mb-1 block text-2xl leading-6 text-indigo-500">Title 1 UI</span>
                          Completely unstyled, fully accessible UI components</h3>
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
                          </svg>
                          </a>
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
                      </div>
                      <a
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
