import Sidebar from "../sidebar/page"
import Footer from "../footer/page"

const CreateRequest = () =>  {
  return (
    <div>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4 ml-20'>

        <h1 className="text-2xl font-bold ml-4 mt-10 mb-10">Create New Data Request</h1>
      
        <h1 className="ml-20 mb-10 text-xl font-semibold">Select Payment Plan</h1>
      <div className="flex r">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 font-bold text-black-500 p-4 ml-10 text-center"> <button>Free <h1 className="mt-3 text-sm font-light">2GB - Disk size </h1><h1 className="text-sm font-light">No Price</h1></button></div>
        <div className="bg-gray-200 font-bold text-black-500 p-4 ml-10"><button >Premium <h1 className="mt-3 text-sm font-light">For users who wants larger storage</h1><h1 className="text-sm font-light">10GB</h1><h1 className="text-sm font-light">10,000 - Price</h1></button></div>
      </div>
</div>

<h1 className="mb-2 mt-5">Please make sure your input are correct!</h1>
<div className="mr-80">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-name">
        Bank Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank-name" type="text" placeholder="Enter bank name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account-number">
        Account Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-number" type="text" placeholder="Enter account number"/>
    </div>
  </form>
</div>


<div className="bg-white shadow-md rounded-md p-6 mt-10">
  <h2 className="text-2xl font-bold mb-4">New Dataset Request Form</h2>
  <form>
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
      <input type="text" id="title" name="title" placeholder="Enter title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
      <textarea id="description" name="description" placeholder="Enter description" className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:border-blue-500"></textarea>
    </div>
    <div className="mb-4">
      <label htmlFor="datatype" className="block text-gray-700 font-medium mb-2">Data Type</label>
      <select id="datatype" name="datatype" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        <option value="text">Text</option>
        <option value="number">Video</option>
        <option value="date">Audio</option>
        <option value="date">Image</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Lables">
        Lables Amount
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-number" type="Number" placeholder="Lables"/>
    </div>
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Lable Name</label>
      <input type="text" id="name" name="name" placeholder="Lable Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="date" id="date" required />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Submit</button>
  </form>
</div>



      
      </div>
      </div> 
      <Footer/>
    </div>
    
  )
}

export default CreateRequest;
