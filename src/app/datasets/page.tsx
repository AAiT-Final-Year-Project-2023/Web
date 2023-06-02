import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"
import Filter from "../searchsort/page"

export default function Dataset() {
  return (
    <div>
      <head>
        <title>Data Shelf</title>
      </head>
      <div className="flex w-full"
      >
      <div className='w-1/4 ml-3'><Sidebar/></div>
      <div className='w-3/4'>
      <section className="">
          <div className="">
              <Search/>
              <h1 className="font-bold text-4xl mt-3 mb-2">Datasets</h1>
              <p className="f ml-5 mr-20 mb-10">The Datatsets are Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo</p>
                
              <Filter/>

              <h3 className="font-semibold text-3xl ml-2 mb-4">Recently Viewed</h3>
            
            <div className="flex flex-col md:flex-row">
              <div className='flex w-full flex-nowrap'>
                <div className="w-full grow items-center h-screen mr-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
                    <h1 className="text-xl font-semibold mb-2">Jhon David</h1>
                    <p className="text-gray-700 text-base">JSON Dataset | 1k datas</p>
                  </div>
                </div>
                </div>

                <div className="w-full grow items-center h-screen mr-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
                    <h1 className="text-xl font-semibold mb-2">Jhon David</h1>
                    <p className="text-gray-700 text-base">JSON Dataset | 1k datas</p>
                  </div>
                </div>
                </div>

                <div className="w-full grow items-center h-screen mr-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
                    <h1 className="text-xl font-semibold mb-2">Jhon David</h1>
                    <p className="text-gray-700 text-base">JSON Dataset | 1k datas</p>
                  </div>
                </div>
                </div>

              </div>
              </div>

              <div className="flex flex-col md:flex-row">
              <div className='flex w-full flex-nowrap'>
                <div className="w-full grow items-center h-screen mr-4 ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
                </div>

                <div className="w-full grow items-center h-screen mr-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
                </div>

                <div className="w-full grow items-center h-screen">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
                </div>

              </div>
              </div>

              <div className="flex flex-col md:flex-row">
              <div className='flex w-full flex-nowrap'>
                <div className="w-full grow items-center h-screen mr-4 ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
                </div>

                <div className="w-full grow items-center h-screen mr-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
                </div>

                <div className="w-full grow items-center h-screen">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
                </div>

              </div>
              </div>
    

              <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="River"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">River</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>

    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://source.unsplash.com/random/1600x900" alt="Forest"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Forest</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div>
    


            </div>
          </section>
      
      </div>
      </div> 
      <Footer/>
    </div>
  )
}
