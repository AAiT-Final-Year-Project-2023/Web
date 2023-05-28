import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

export default function RequestDetail() {
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
              <h1 className="text-black-500 mt-5 mb-5 ml-1">Request Detail</h1>
              <p className="ml-10 mr-10">loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam 
              loream epis loraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam
              </p>
              <div className="ml-20  mt-5">
                <li>Title of the request</li>
                <li>Description</li>
                <li>Number of datas</li>
                <li>Data type/format (image, video, audio, text)</li>
                <li>Lable (kind of labeling)</li>
                <li>Guidline</li>
                <li>Data size</li>
                <li>Payment per cost</li>
                <li>Acceses (Public/Private)</li>
                <li>Deadline</li>
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                    Contribute </button>

              </div>


            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
