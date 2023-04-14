import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar'
import { Link } from 'react-router-dom'

const TripData = () => {
  return (
 <div>
           <DashboardNavbar/>
         <Sidebar/>
         <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
  <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
    <h6 className='font-bold text-2xl mb-8 text-center italic text-zinc-700'>Trip Information</h6>
  </div>
  <div className="flex-auto px-0 pt-0 pb-2">
    <div className="p-0 overflow-x-auto">
      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
        <thead className="align-bottom">
          <tr>
            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Package Name</th>
            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Price</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Location</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Bed</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Room</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Days</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Quantity</th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Action</th>
            
          </tr>
        </thead>
        <tbody>


          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">Bandarban</h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400">Date</p>
                </div>
              </div>
            </td>

            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 font-semibold leading-tight text-xs">$700</p>
              
            </td>
            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <span className="mb-0 font-semibold leading-tight text-xs">Bangladesh</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">10</span>
            </td>

            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">23</span>
            </td>

            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">18</span>
            </td>

            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">50</span>
            </td>

            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <Link className="font-semibold leading-tight text-xs text-slate-400"> Edit </Link>
            </td>
            
          </tr>


{/* 
          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user2" />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">Alexa Liras</h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400">alexa@creative-tim.com</p>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 font-semibold leading-tight text-xs">Programator</p>
              <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
            </td>
            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">11/01/19</span>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <Link className="font-semibold leading-tight text-xs text-slate-400"> Edit </Link>
            </td>
          </tr>



          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user3" />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">Laurent Perrier</h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400">laurent@creative-tim.com</p>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 font-semibold leading-tight text-xs">Executive</p>
              <p className="mb-0 leading-tight text-xs text-slate-400">Projects</p>
            </td>
            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">19/09/17</span>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <Link className="font-semibold leading-tight text-xs text-slate-400"> Edit </Link>
            </td>
          </tr>



          <tr>
            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user6" />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-0 leading-normal text-sm">Miriam Eric</h6>
                  <p className="mb-0 leading-tight text-xs text-slate-400">miriam@creative-tim.com</p>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
              <p className="mb-0 font-semibold leading-tight text-xs">Programtor</p>
              <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
            </td>
            <td className="p-2 leading-normal text-center align-middle bg-transparent border-b-0 text-sm whitespace-nowrap shadow-transparent">
              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
              <span className="font-semibold leading-tight text-xs text-slate-400">14/09/20</span>
            </td>
            <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
              <Link className="font-semibold leading-tight text-xs text-slate-400"> Edit </Link>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
    </div>
    
  )
}

export default TripData