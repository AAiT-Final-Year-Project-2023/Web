import Sidebar from "../sidebar/page"
import Footer from "../footer/page"

const Contribution = () =>{
    return(
    <div>
        <div className="flex w-full">
        <div className='w-1/4 ml-3'><Sidebar/></div>

        <div className='w-3/4'>
          <h1>Contribute Verification Table</h1>
          <div className="flex flex-col overflow-x-auto">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">File Name</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Size</th>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-4">Status</th>
              <th scope="col" className="px-6 py-4">Verification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4">File1</td>
              <td className="whitespace-nowrap px-6 py-4">Jhon Doe</td>
              <td className="whitespace-nowrap px-6 py-4">2mb</td>
              <td className="whitespace-nowrap px-6 py-4">06/10/2023</td>
              <td className="whitespace-nowrap px-6 py-4">Pending</td>
              <td className="whitespace-nowrap px-6 py-4"><button> <a href="./data_viewer_page">Verify</a></button></td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4">File2</td>
              <td className="whitespace-nowrap px-6 py-4">David Jhon</td>
              <td className="whitespace-nowrap px-6 py-4">23mb</td>
              <td className="whitespace-nowrap px-6 py-4">02/22/2023</td>
              <td className="whitespace-nowrap px-6 py-4">Accepted</td>
              <td className="whitespace-nowrap px-6 py-4">Done</td>
            </tr>
            <tr className="border-b ">
              <td className="whitespace-nowrap px-6 py-4">File3</td>
              <td className="whitespace-nowrap px-6 py-4">Abebe Belete</td>
              <td className="whitespace-nowrap px-6 py-4">10mb</td>
              <td className="whitespace-nowrap px-6 py-4">01/2/2023</td>
              <td className="whitespace-nowrap px-6 py-4">Rejected</td>
              <td className="whitespace-nowrap px-6 py-4">Done</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        
        </div>
        </div> 
        <Footer/>
      </div>

    )
}
export default Contribution;