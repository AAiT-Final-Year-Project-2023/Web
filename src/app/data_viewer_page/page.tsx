import Sidebar from "../sidebar/page"
import Footer from "../footer/page"

const DataViewer = () =>  {
  return (
    <div>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
      <div className="grid grid-cols-2 sm:grid-cols-2 mt-40 ml-20">
                <div className="col-span-1 ">
                <div className="flex h-4/5 justify-center rounded-lg bg-white text-center shadow shadow-black/10 dark:shadow-black/40 ml-20 mr-20">
                    <code className="self-center"><h1 className="fa fa-address-book"></h1></code>
                </div>
                <div className="ml-40 mt-5 "><button className="mr-5 font-bold text-sl text-green-400">Accept</button> <button className="mr-5 font-bold text-sl text-red-400">Decline</button></div>
                </div>

                <div className="col-span-1">
                    <h1 className="text-xl font-semibold mb-4">FileName</h1>
                    <h1 className="text-xl font-semibold mb-4">02/10/2023</h1>
                    <h1 className="text-xl font-semibold mb-4">10mb</h1>
                    <h1 className="text-xl font-semibold mb-4">By: Jhon Doe</h1>
                </div>
    
      </div>
      </div>
      </div>        
      <Footer/>
    </div>
    
  )
}

export default DataViewer;
