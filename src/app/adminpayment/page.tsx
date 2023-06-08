import Search from "../navsearchprofile/page"

export default function Payment(){
    return(
        <div className="bg-gray-100 font-family-karla flex">

    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
            <a href="index.html" className="text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
        </div>
        <nav className="text-base font-semibold pt-3">
            <a href="/admin" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Users
            </a>
            <a href="./adminpayment" className="flex items-center active-nav-link py-4 pl-6 nav-item">
                <i className="fas fa-sticky-note mr-3"></i>
                Payment
            </a>
            <a href="/adminstorage" className="flex items-center opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-table mr-3"></i>
                Storage
            </a>
            
        </nav>
    </aside>

    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <div className="w-full flex-grow p-6">
                <Search/>
                <h1 className="text-4xl mt-10 font-bold text-black pb-6">Payment</h1>

                <div className="w-full mt-6">
                    <p className="text-3xl font-semibold pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Requests
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Dataset ID</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Payment</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    <td className="w-1/3 text-left py-3 px-4">01</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500">complete</a></td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    <td className="w-1/3 text-left py-3 px-4">02</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500">inprogress</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    <td className="w-1/3 text-left py-3 px-4">03</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >complete</a></td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    <td className="w-1/3 text-left py-3 px-4">04</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >inprogress</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-full mt-6">
                    <p className="text-3xl font-semibold pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i>Contributers
                    </p>
                    <div className="bg-white overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Dataset ID</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Paid Amount</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>

                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td className="w-1/3 text-left py-3 px-4">01</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">1.00</a></td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td className="w-1/3 text-left py-3 px-4">02</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">2.00</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td className="w-1/3 text-left py-3 px-4">03</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">0.5</a></td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td className="w-1/3 text-left py-3 px-4">04</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">3.00</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
</div>
    )
}