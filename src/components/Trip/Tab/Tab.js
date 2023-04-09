import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
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
   const [selectedDate,setSelectedDate] = useState (null)




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
                <p className="text-primary text-center text-lg font-bold">
                  LOGIN
                </p>
              

   

                
                <div className="mt-2 border rounded ">
                  <label
                    className="block px-2 mb-2 text-sm font-bold text-primary"
                    for="date"
                  >
                    Journey Date
                  </label>
                  
                 <DatePicker className="px-2 w-full border border-black rounded"  selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat="dd/MM/yyyy"/>
                </div>

                

                <div className="mt-4 items-center flex justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit"
                  >
                    Login
                  </button>
                
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
