import React from 'react'

const Register = () => {
  return (
    <div>
       
       <div className="h-screen font-sans login bg-cover">
<div className="container mx-auto h-full flex flex-1 justify-center items-center">
    <div className="w-full max-w-lg ">
      <div className="leading-loose ">
        <form className="max-w-sm m-4 p-10 border border-primary bg-white bg-opacity-25 rounded shadow-xl">
            <p className="text-black text-center text-lg font-bold">Register</p>
             
              <div className="">
                <label className="block text-sm text-black" for="Name">Name</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Enter Your Name" aria-label="email" required/>
              </div>

              <div className="">
                <label className="block text-sm text-black" for="email">E-mail</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Enter Youre-mail" aria-label="email" required/>
              </div>

              <div className="mt-2">
                <label className="block  text-sm text-black">Password</label>
                 <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Enter Your Password" arial-label="password" required/>
              </div>

              <div className="mt-2">
                <label className="block  text-sm text-black">Confirm Password</label>
                 <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Confirm Your Password" arial-label="password" required/>
              </div>

              <div className="mt-4 items-center flex justify-center">
                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Create Account</button>
              </div>
              <div className="text-center">
                
                Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                
              </div>

        </form>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register