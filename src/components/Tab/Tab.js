import { useState } from "react";
// import Accordion from "../Accordion/Accordion";
import { useQuery } from "react-query";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { data: tab = [] } = useQuery({
    queryKey: ["tab"],
    queryFn: () =>
      fetch("http://localhost:5000/tabs").then((res) => res.json()),
  });

  console.log(tab);

  return (
    <div className="container mb-16">
      <div className="bloc-tabs mt-8">
        {tab?.map((tab) => (
          <button
            className={
              toggleState === tab.tabState ? "tabs active-tabs" : "tabs"
            }
            onClick={() => toggleTab(tab.tabState)}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>

      <div className="content-tabs flex justify-between px-12">
        <div>
          {tab?.map((t) => (
            <div
              className={
                toggleState === t.tabState
                  ? "content  active-content"
                  : "content"
              }
            >
              <h2>{t.tabName}</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>
          ))}
        </div>

        <div>
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form className="max-w-sm m-4 p-10 boorder border-primary bg-white bg-opacity-30 rounded shadow-xl">
                <p className="text-white text-center text-lg font-bold">
                  LOGIN
                </p>
                <div className="">
                  <label
                    className="block mb-2 text-sm font-bold text-black"
                    for="E-mail"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    aria-label="email"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block mb-2 text-sm font-bold text-black"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    arial-label="password"
                    required
                  />
                </div>

                <div className="mt-4 items-center flex justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit"
                  >
                    Login
                  </button>
                  <a
                    className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-primary"
                    href="#"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <div className="text-center">
                  <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-primary">
                    Create Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
