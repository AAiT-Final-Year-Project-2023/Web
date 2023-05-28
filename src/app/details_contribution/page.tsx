import Sidebar from "../sidebar/page"
import Footer from "../footer/page"

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
          <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                
            </div>
          </form>
              <h1 className="text-3xl font-bold mt-5 mb-5 ml-1">contribution Detail</h1>
              <p className="ml-10 mr-10 font-semibold">loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam 
              loream epis loraeam loream episom loream episom episomloraeam loream episom loream episom episomloraeam
              </p>
              <div className="ml-20  mt-5">
                <li>Dataset Name</li>
                <li>Description</li>
                <li>Number of datas</li>
                <li>Data type/format (image, video, audio, text)</li>
                <li>Lable (kind of labeling)</li>
                <li>Guidline</li>
                <li>Data size</li>
                <li>Payment per cost</li>
                <li>Acceses (Public/Private)</li>
                <li>Timeline</li>
              </div>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mb-5">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "45%"}}> 45%</div>
              </div>

              
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Dataset name
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    text
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    video
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                   1
                </td>
                <td className="px-6 py-4">
                    audio
                </td>
            </tr>
        </tbody>
        {/* <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr>
        </tfoot> */}
    </table>
</div>



            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
