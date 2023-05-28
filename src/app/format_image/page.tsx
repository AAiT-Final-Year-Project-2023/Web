import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

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
              <h1 className="text-3xl mt-5 mb-5 ml-1">Upload Image Data</h1>
              
            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
