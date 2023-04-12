import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
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

   const [selectedDate,setSelectedDate] = useState (null)

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

        <div >
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form className="max-w-sm m-4 p-10 bg-white bg-opacity-30
               rounded-lg shadow-lg">
                <div className="border rounded py-1 px-4">
                  <label
                    className="block px-2 text-lg"
                    for="date">
                    Journey Date
                  </label>
                  
                 <DatePicker className="px-2 w-full" 
                 selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="dd/MM/yyyy"/>
                </div>
                <div className="border rounded py-1 px-4 mt-3">
                  <label
                    className="block px-2 text-lg"
                    for="date">
                    Travelers
                  </label>
                  
                 <DatePicker className="px-2 w-full" 
                 selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="dd/MM/yyyy"/>
                </div>
                <div className="border rounded py-1 px-4 mt-3">
                  <label
                    className="block px-2 text-lg"
                    for="date">
                    Options
                  </label>
                  
                 <DatePicker className="px-2 w-full" 
                 selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="dd/MM/yyyy"/>
                </div>
                <div className="text-center mt-2">
                  <p>Starting from</p>
                  <h6 className="line-through my-1">BDT 1,840</h6>
                  <h6 className="text-primary text-xl font-semibold">BDT 1,693</h6>
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
