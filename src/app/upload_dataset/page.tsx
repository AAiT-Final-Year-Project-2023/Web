import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

export default function UploadDataset() {
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
              <h1 className="text-3xl mt-5 mb-5 ml-1">Upload the New Dataset</h1>
              <p className="ml-10 mr-10">loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam 
              loream epis loraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam
              </p>
              
              <div className="ml-20  mt-5">
                <li>Title of the Dataset</li>
                <li>Description</li>
                <li>Number of datas</li>
                <li>Data type/format (image, video, audio, text)</li>
                <li>Data size</li>
                <li>Acceses (Public/Private)</li>
              </div>

            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
