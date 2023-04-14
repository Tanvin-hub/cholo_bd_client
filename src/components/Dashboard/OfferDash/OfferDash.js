import React from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../Sidebar/Sidebar'

const OfferDash = () => {
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
          Trip Details
        </label>

        <div class="mb-8">
          <input type="file" name="file" id="file" class="sr-only" />
          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>

        <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Package Name">
        Package Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Package Name"/>
    </div>

        <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Price">
        Price
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Package Price"/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Location">
       Discount
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Discount"/>
    </div>

    <div className='flex gap-6'> 
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Bed">
        Bed
      </label>
      <input class="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Bed"/>
    </div>
    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Room">
        Room
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Room"/>
    </div>
    </div>

    <div className='flex gap-6'> <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Days">
        Days
      </label>
      <input class="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Days"/>
    </div>
    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Quantity">
        Quantity
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Quantity"/>
    </div>
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

export default OfferDash