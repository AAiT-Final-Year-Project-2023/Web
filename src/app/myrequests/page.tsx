import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"
import Filter from "../searchsort/page"


export default function Requests() {
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
              <h1 className="font-bold text-4xl ml-2">My Requests</h1>
              <p className="mb-4">loream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream 
    episom loream episomloream episom loream episom</p>
    
    <Filter/>


            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
