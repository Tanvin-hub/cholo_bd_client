import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar'

const Users = () => {
  return (
    <div>
     <DashboardNavbar/>
  <Sidebar/>
  <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
    <h6 className='font-bold text-2xl mb-8 text-center italic text-zinc-700'>Users</h6>
    </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr class="border-b">
                    <th class="text-left p-3 px-5">Name</th>
                    <th class="text-left p-3 px-5">Email</th>
                    <th class="text-left p-3 px-5">Role</th>
                    <th></th>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/></td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/></td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                <tr class="border-b hover:bg-orange-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                
                <tr class="border-b hover:bg-orange-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                <tr class="border-b hover:bg-orange-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                <tr class="border-b hover:bg-orange-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
                <tr class="border-b hover:bg-orange-100">
                    <td class="p-3 px-5">
                        <input type="text" value="user.name" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <input type="text" value="user.email" class="bg-transparent"/>
                        </td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                    <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Banned</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </div>
    </div>
  )
}

export default Users