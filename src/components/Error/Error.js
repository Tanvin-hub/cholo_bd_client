import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "react-query";
import Photo from "../../Assets/nature.jpg";

const Error = () => {
  const { user } = useContext(AuthContext);

  const { data: profile = [], refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(
        `https://cholo-bd-server.vercel.app/users/?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(profile);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={Photo}
                alt="John Doe"
              />
            </div>

            <div className="p-2">
              {user?.uid ? (
                <>
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                    {profile?.name}
                  </h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>User</p>
                  </div>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Address
                        </td>
                        <td className="px-2 py-2">{profile?.address}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Phone
                        </td>
                        <td className="px-2 py-2">{profile?.contact}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2">{profile?.email}</td>
                      </tr>
                    </tbody>
                  </table>
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
