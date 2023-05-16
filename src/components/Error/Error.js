import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Context/AuthProvider";


const Error = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
<Navbar></Navbar>
<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
      

        <div class="p-2">
        {user?.uid ? (
              <>
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
            {user?.displayName}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Admin</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{user?.contact}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{ user?.email}</td>
                </tr>
            </tbody></table>

             
            </>
             ) : (
              <h3 className="text-xl">No user data found</h3>
)}
        </div>
    </div>
</div>
</div>
</div>
  );
};

export default Error;
