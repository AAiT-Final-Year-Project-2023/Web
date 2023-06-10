import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

const RequestDetail = () =>  {
  return (
    <div>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
              <h1 className="text-2xl font-bold text-black-500 mt-5 mb-5 ml-1">Request Name</h1>
              <h1 className="mb-10">This data is about Lorem ipsum dolor sit amet </h1>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
                <div className="col-span-2">
                  <h1 className="font-bold text-xl">Description</h1>
                  <p className="text-gray-700">This data is about Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                  <h1 className="font-bold text-xl mt-5">Data Type</h1>
                  <h1 className="mb-5 ">Video</h1>
                  <div>
                    <h1 className="font-bold text-xl">Lablings</h1>
                    <li className="ml-3">Labling1</li>
                    <li className="ml-3">Labling2</li>
                    <li className="ml-3">Labling3</li>
                  </div>
                  </div>

                <div className="col-span-1 mt-16 ml-5">
                  <h1 className="font-bold text-xl ">Data Amount Need</h1>
                  <h1 className="mb-5">300 Datas</h1>
                  <h1 className="font-bold text-xl">Collected </h1>
                  <h1 className="mb-5">70/300</h1>
                  <h1 className="font-bold text-xl">Due Date </h1>
                  <h1 className="mb-5">07/10/2023</h1>
                  <h1 className="font-bold text-xl mb-5">Private</h1>
                  <h1></h1>
                </div>
                
              </div>
              <button
                type="button"
                className="ml-80 inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                Contribute
            </button>

              <div className="justify-center">
                <a className="ml-80 justify-center bg-gradient-to-b text-blue-500 font-semiboldpx-10 py-3 rounded-2xl shadow-md border-b-4 hover hover:shadow-sm transition-all duration-500 text-2xl" href="/verify_contribute">Contribute</a>
              </div>

      
      </div>
      </div> 
      <Footer/>
    </div>
    
  )
}

export default RequestDetail;
