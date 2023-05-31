import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

export default function AudioFormat() {
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
              <h1 className="text-3xl mt-5 mb-5 ml-1">Upload Audio Data</h1>
              <h1 className="text-2xl font-semibold ml-3 mb-1">Request Title Name</h1>  
                  <p className="mb-3 ml-3 mr-50">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support.</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                <div className="col-span-2">
                  
                  <h1 className="font-semibold ml-20 mt-6 mb-10">Labeling directions</h1>
                  <button type="button" className="py-2.5 px-5 mr-2 mb-2 ml-20 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-100 dark:hover:text-white dark:hover:bg-gray-700">Upload</button>

                </div>
                <div className="col-span-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-30 w-full viewBox=0 0 24 24 bg-gray-200 mt-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
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
