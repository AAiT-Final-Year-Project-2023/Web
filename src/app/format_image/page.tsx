import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

export default function ImageFormat() {
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
              <h1 className="text-4xl font-bold mt-5 mb-5">Upload Image Data</h1>
              <h1 className="text-2xl font-semibold ml-3 mb-1">Request Title Name</h1>  
                  <p className="mb-3 ml-3 mr-50">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support.</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                <div className="col-span-2">
                  
                  <h1 className="font-semibold ml-20 mt-6 mb-10">Labeling directions</h1>
                  <button type="button" className="py-2.5 px-5 mr-2 mb-2 ml-20 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-100 dark:hover:text-white dark:hover:bg-gray-700">Upload</button>

                </div>
                <div className="col-span-2">
                {/* <FontAwesomeIcon icon="fa-solid fa-image" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="h-30 w-full viewBox=0 0 24 24 bg-gray-200 mt-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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
