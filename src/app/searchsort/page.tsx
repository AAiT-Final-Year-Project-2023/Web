import Link from "next/link";

export default function Searchsort() {
    return (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-6 mt-4">
              
              <div className="col-span-4">
              <form className="flex items-center">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
            </form>
            </div>

            <div className="col-span-2">
                <div className="ml-10">Filter   
                {/* <label htmlFor="datatype" className="block text-gray-700 font-medium mb-2">Sorted By</label> */}
                <select id="datatype" name="datatype" className="ml-5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="text">Date</option>
                    <option value="number">Popularity</option>
                </select>
                </div>
            </div>
            </div>
    )
}