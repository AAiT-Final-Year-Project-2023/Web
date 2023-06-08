import Search from "../navsearchprofile/page"

export default function Admin(){
    return(
        <div>

{/* <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2"></div>
            <div x-data="{ isOpen: false }" className="relative w-1/2 flex justify-end">
                <button onClick="isOpen = !isOpen" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                </button>
                <button x-show="isOpen" click="isOpen = false" className="h-full w-full fixed inset-0 cursor-default"></button>
                <div x-show="isOpen" className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                    <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                    <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                </div>
            </div>
        </header> */}

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

            {/* <h1 className="text-3xl text-black pb-6">Admin</h1> */}

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
                <p className="text-3xl font-semibold mt-20 pb-3 flex items-center">
                    <i className="fas fa-list mr-3"></i>Contributers
                </p>
                <div className="bg-white overflow-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Dataset ID</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Paid Amount</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >01</a></td>
                                <td className="w-1/3 text-left py-3 px-4">01</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500">Free</a></td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500">02</a></td>
                                <td className="w-1/3 text-left py-3 px-4">02</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500">Pro</a></td>
                            </tr>
                            <tr>
                                <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500">Free</a></td>
                                <td className="w-1/3 text-left py-3 px-4">03</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >Free</a></td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >04</a></td>
                                <td className="w-1/3 text-left py-3 px-4">04</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >Pro</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</div>

</div>


    )
}