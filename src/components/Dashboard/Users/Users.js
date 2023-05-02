import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/admin/all-users").then((res) => res.json()),
  });

  const handleRemove = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove this user?"
    );

    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch()
            toast.error("User Removed Successfully");
          }
        });
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h6 className="font-bold text-2xl mb-8 text-center italic text-zinc-700">
              Users
            </h6>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th></th>
                </tr>

                {users?.map((user) => <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5">
                        <input type="text" value={user.name} className="bg-transparent"/></td>
                    <td className="p-3 px-5">
                        <input type="text" value={user.email} className="bg-transparent"/></td>
                    <td className="p-3 px-5">
                        <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td>
                    <td className="p-3 px-5 flex justify-end"><button type="button" 
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 
                    text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                    <button onClick={() => handleRemove(user._id)} type="button" className="text-sm bg-red-500 hover:bg-red-700 
                    text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Ban</button></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
