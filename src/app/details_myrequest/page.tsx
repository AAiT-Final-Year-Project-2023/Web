import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

export default function MyRequestDetail() {
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
              <h1 className="text-black-500 mt-5 mb-5 ml-1">My Request Detail</h1>
              <p className="ml-10 mr-10">loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam 
              loream epis loraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam
              </p>
              
            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
