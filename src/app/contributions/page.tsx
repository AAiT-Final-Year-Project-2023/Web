import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

const Contribution = ()=> {
  return (
    <div>
      <div className="flex w-full">
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
          <Search/>
              <h1 className="font-bold text-4xl mt-8 mb-5">Contributions</h1>

    <div className="bg-white overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Data File Name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Request Titel</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Earned</th>

                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="text-left py-3 px-4">MyFile1</td>
                                    <td className="text-left py-3 px-4">Flower</td>
                                    <td className="text-left py-3 px-4">Video</td>
                                    <td className="text-left py-3 px-4">06.09.2023</td>
                                    <td className="text-left py-3 px-4">Accepted</td>
                                    <td className="text-left py-3 px-4">40birr</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="text-left py-3 px-4">MyFile2</td>
                                    <td className="text-left py-3 px-4">Light</td>
                                    <td className="text-left py-3 px-4">Text</td>
                                    <td className="text-left py-3 px-4">06.09.2023</td>
                                    <td className="text-left py-3 px-4">Accepted</td>
                                    <td className="text-left py-3 px-4">40birr</td>
                                </tr>
                                <tr>
                                    <td className="text-left py-3 px-4">MyFile3</td>
                                    <td className="text-left py-3 px-4">Animal</td>
                                    <td className="text-left py-3 px-4">Image</td>
                                    <td className="text-left py-3 px-4">06.09.2023</td>
                                    <td className="text-left py-3 px-4">Accepted</td>
                                    <td className="text-left py-3 px-4">40birr</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="text-left py-3 px-4">MyFile4</td>
                                    <td className="text-left py-3 px-4">Bird</td>
                                    <td className="text-left py-3 px-4">Video</td>
                                    <td className="text-left py-3 px-4">06.09.2023</td>
                                    <td className="text-left py-3 px-4">Accepted</td>
                                    <td className="text-left py-3 px-4">40birr</td>
                                </tr>
                                <tr>
                                    <td className="text-left py-3 px-4">MyFile5</td>
                                    <td className="text-left py-3 px-4">Star</td>
                                    <td className="text-left py-3 px-4">Image</td>
                                    <td className="text-left py-3 px-4">06.09.2023</td>
                                    <td className="text-left py-3 px-4">Accepted</td>
                                    <td className="text-left py-3 px-4">40birr</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="text-left py-3 px-4">MyFile6</td>
                                    <td className="text-left py-3 px-4">Flower</td>
                                    <td className="text-left py-3 px-4">Video</td>
                                    <td className="text-left py-3 px-4">06.09.2023</td>
                                    <td className="text-left py-3 px-4">Accepted</td>
                                    <td className="text-left py-3 px-4">40birr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

              
      </div>
      </div> 
      <Footer/>
    </div>
  )
}

export default Contribution;
