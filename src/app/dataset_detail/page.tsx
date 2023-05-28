import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

export default function DatasetDetail() {
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
              <h1 className="text-black-500 mt-5 mb-5 ml-1">Dataset Detail</h1>
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
                <li>Timeline</li>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-40 mt-6">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Download</span>
                </button>
              </div>


            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
