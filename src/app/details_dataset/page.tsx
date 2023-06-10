import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

const DatasetDetail = () =>  {
  return (
    <div>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
              <h1 className="text-2xl font-bold text-black-500 mt-5 mb-5 ml-1">Dataset Name</h1>
              <h1 className="mb-10">This data is about Lorem ipsum dolor sit amet </h1>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
                <div className="col-span-2">
                  <h1 className="font-bold text-xl">Content</h1>
                  <p className="text-gray-700">This data is about Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                  <h1 className="font-bold text-xl mb-5 mt-5">Data type</h1>
                  <h1>Video</h1>
                  <div>
                    <h1 className="font-bold text-xl">Lablings</h1>
                    <li className="ml-3">Labling1</li>
                    <li className="ml-3">Labling2</li>
                    <li className="ml-3">Labling3</li>
                  </div>
                  </div>

                <div className="col-span-1 mt-16 ml-5">
                  <h1 className="font-bold text-xl ">Amount needed</h1>
                  <h1 className="mb-5">300 Datas</h1>
                  <h1 className="font-bold text-xl">Data Size</h1>
                  <h1 className="mb-5">20mb</h1>
                  <h1 className="font-bold text-xl mb-5">Private</h1>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-6">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Download</span>
                </button>
                </div>
                
              </div>

      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}

export default DatasetDetail;
