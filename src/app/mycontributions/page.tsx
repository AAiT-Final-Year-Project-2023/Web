import Sidebar from "../sidebar/page"
import Footer from "../footer/page"
import Search from "../navsearchprofile/page"

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
              <h1 className="font-bold text-4xl ml-2">My Contribution</h1>
              <p className="mb-4">loream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream episomloream episom loream 
    episom loream episomloream episom loream episom</p>

    <div className="grid space-x-1 lg:grid-cols-4 mt-10">
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjiLxl1lHrBI3-W4QqXz8RqkQmSTbcOBrBQ&usqp=CAU" />
                <a href="/details_contribution"><h1>Flower age</h1></a>
                </div>

                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8EkyXO_U3bU8RwQNlvCl6X9__zvyo8zyXA&usqp=CAU" />
                <a href="/details_contribution"><h1>Title Name</h1></a>
                </div>

                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49l8qhr2SEkr6i1mihIdXii7zwuib2AAnlw&usqp=CAU" />
                <a href="/details_contribution"><h1>Sicence</h1></a>
                </div>

                <div>
                <img className="w-full object-cover md:h-full" src="https://loremflickr.com/g/320/240/team" />
                <h1>Title</h1>
                </div>
              </div>
            
              <div className="grid space-x-1 lg:grid-cols-4 mt-10">
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjiLxl1lHrBI3-W4QqXz8RqkQmSTbcOBrBQ&usqp=CAU" />
                <a href="/details_contribution"><h1>Flower age</h1></a>
                </div>
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8EkyXO_U3bU8RwQNlvCl6X9__zvyo8zyXA&usqp=CAU" />
                <a href="/details_contribution"><h1>Title Name</h1></a>
                </div>
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49l8qhr2SEkr6i1mihIdXii7zwuib2AAnlw&usqp=CAU" />
                <a href="/details_contribution"><h1>Sicence</h1></a>
                </div>
                <div>
                <img className="w-full object-cover md:h-full" src="https://loremflickr.com/g/320/240/team" />
                <h1>Title</h1>
                </div>
              </div>
        
              <div className="grid space-x-1 lg:grid-cols-4 mt-10">
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjiLxl1lHrBI3-W4QqXz8RqkQmSTbcOBrBQ&usqp=CAU" />
                <a href="/details_contribution"><h1>Flower age</h1></a>
                </div>
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8EkyXO_U3bU8RwQNlvCl6X9__zvyo8zyXA&usqp=CAU" />
                <a href="/details_contribution"><h1>Title Name</h1></a>
                </div>
                <div>
                <img className="w-full object-cover md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49l8qhr2SEkr6i1mihIdXii7zwuib2AAnlw&usqp=CAU" />
                <a href="/details_contribution"><h1>Sicence</h1></a>
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
