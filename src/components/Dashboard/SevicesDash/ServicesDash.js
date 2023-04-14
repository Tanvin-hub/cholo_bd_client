import React from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../Sidebar/Sidebar'

const ServicesDash = () => {
  return (
    <div>
        <DashboardNavbar/>
         <Sidebar/>

         <div class="flex items-center justify-center p-12 ml-48">

  <div class="mx-auto w-full max-w-[550px] bg-white shadow-2xl">
    <form
      class="py-6 px-9"
      action="https://formbold.com/s/FORM_ID"
      method="POST"
    >

      <div class="mb-6 pt-4">
        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
          Services Details
        </label>


        <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Title">
        Title
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Icon">
        Icon
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Icon"/>
    </div>

        <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Description">
        Description
      </label>
      <textarea class="h-[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Package Description"/>
    </div>


      </div>

      <div>
        <button
          class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Send File
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default ServicesDash