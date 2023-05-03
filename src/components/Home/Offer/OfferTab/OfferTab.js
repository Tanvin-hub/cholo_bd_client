import { useState, useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const OfferTab = (data) => {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate();
   const { user } = useContext(AuthContext);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { data: tab = [] } = useQuery({
    queryKey: ["tab"],
    queryFn: () =>
      fetch("https://cholo-bd-server.vercel.app/tabs").then((res) =>
        res.json()
      ),
  });

  const handleAddToTrip = (data) => {
    const bookedOfferTrip = {
      title: data.data.title,
      trip_img: data.data.detailsImg,
      id: data.data._id,
      price : data.data.price,
      email: user?.email,
      name: user?.displayName
    };
    fetch('https://cholo-bd-server.vercel.app/offerBooking', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookedOfferTrip)
    })
    .then(res => res.json())
    .then(result => {
      if(result.acknowledged === true) {
        navigate("/booking")
      }
    })
  }

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
                <button onClick={() => handleAddToTrip(data)}
                  className="px-3 py-2 font-medium bg-primary border border-primary
                     rounded hover:bg-transparent transition-all 
                     duration-150 ease-linear md:py-2 w-full mx-auto mt-3
                     md:px-6 inline-block uppercase tracking-wider text-white hover:text-black"
                     >
                      Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTab;
