import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "react-query";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

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

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container mb-16">
      <div className="bloc-tabs mt-8 w-[35%]">
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
              <form
                className="max-w-sm m-4 p-10 bg-white bg-opacity-30
               rounded-lg shadow-lg"
              >
                <div className="border rounded py-1 px-4">
                  <label className="block px-2 text-md" for="date">
                    Journey Date
                  </label>

                  <DatePicker
                    className="px-2 w-full"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={'Please select a date'} 
                  />
                </div>

   
          
<div class="group inline-block">
  <button
    class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
  >
    <span class="pr-1 font-semibold flex-1">Dropdown</span>
    <span>
      <svg
        class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
  >
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
      <button
        class="w-full text-left flex items-center outline-none focus:outline-none"
      >
        <span class="pr-1 flex-1">Langauges</span>
        <span class="mr-auto">
          <svg
            class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        class="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
      >
        <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
        <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            class="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span class="pr-1 flex-1">Python</span>
            <span class="mr-auto">
              <svg
                class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
          >
            <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
            <li class="px-3 py-1 hover:bg-gray-100">3+</li>
          </ul>
        </li>
        <li class="px-3 py-1 hover:bg-gray-100">Go</li>
        <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
      </ul>
    </li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
  </ul>
</div>

                <div className="border rounded py-1 px-4 mt-3">
                  <label className="block px-2 text-lg" for="date">
                    Options
                  </label>

                  <DatePicker
                    className="px-2 w-full"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>

                <div className="text-center mt-2">
                  <p>Starting from</p>
                  <h6 className="line-through my-1">BDT 1,840</h6>
                  <h6 className="text-primary text-xl font-semibold">
                    BDT 1,693
                  </h6>
                </div>
                <input
                  className="px-3 py-2 font-medium bg-primary border border-primary
                     rounded hover:bg-transparent transition-all 
                     duration-150 ease-linear md:py-2 w-full mx-auto mt-3
                     md:px-6 inline-block uppercase tracking-wider text-white hover:text-black"
                  type="submit"
                  value="Continue"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
