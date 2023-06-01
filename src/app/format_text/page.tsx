import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

export default function TextFormat() {
  return (
    <div>
      <head>
        <title>Data Shelf</title>
      </head>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
      <section className="">
          <div className="">
          <Search/>
              <h1 className="text-3xl mt-5 mb-5 ml-1">Upload Text Data</h1>
              <h1 className="text-2xl font-semibold ml-3 mb-1">Request Title Name</h1>  
                  <p className="mb-3 ml-3 mr-50">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support.</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                <div className="col-span-2">
                  
                  <h1 className="font-semibold ml-20 mt-6 mb-10">Labeling directions</h1>
                  <button type="button" className="py-2.5 px-5 mr-2 mb-2 ml-20 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-100 dark:hover:text-white dark:hover:bg-gray-700">Upload</button>

                </div>
                <div className="col-span-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="h-30 w-full viewBox=0 0 24 24 bg-gray-200 mt-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                </div>
            </div>
            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}