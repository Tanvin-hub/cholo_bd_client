import { useState } from "react";
import { useQuery } from "react-query";
import {Link} from "react-router-dom"

const Tab = (data) => {
  const [toggleState, setToggleState] = useState(1);
  console.log(data.data._id)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { data: tab = [] } = useQuery({
    queryKey: ["tab"],
    queryFn: () =>
      fetch("https://travel-server-zeta.vercel.app/tabs").then((res) =>
        res.json()
      ),
  });


  return (
    <div className="container mb-16">
      <div className="bloc-tabs mt-8 w-[35%]">
        {tab?.map((tab) => (
          <button
            className={
              toggleState === tab.tabState ? "tabs active-tabs" : "tabs"
            }
            onClick={() => toggleTab(tab.tabState)}>
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
              }>
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
              <div className="max-w-sm m-4 p-10 bg-white bg-opacity-30
               rounded-lg ">
                <div className="text-center mt-2">
                  <p>Starting from</p>
                  <h6 className="text-primary text-xl font-semibold">
                    BDT {data?.data.price}
                  </h6>
                </div>
                <Link to={`booking/${data.data._id}`}
                  className="px-3 py-2 font-medium bg-primary border border-primary
                     rounded hover:bg-transparent transition-all 
                     duration-150 ease-linear md:py-2 w-full mx-auto mt-3
                     md:px-6 inline-block uppercase tracking-wider text-white hover:text-black">
                      Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
