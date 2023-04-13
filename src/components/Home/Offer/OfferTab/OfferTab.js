import { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "react-query";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OfferTab = () => {
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
                <div className="border rounded-md py-1 px-4">
                  <label className="block px-2 text-md" for="date">
                    Journey Date
                  </label>
                  <DatePicker
                    className="px-2 w-full"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={"Click here to select a date"}
                  />
                </div>

                <Menu
                  as="div"
                  className="relative inline-block text-left w-[19rem] mt-4"
                >
                  <div>
                    <Menu.Button
                      className="inline-flex w-full justify-center gap-x-1.5 
                    rounded-md bg-white px-3 py-4 text-sm font-semibold text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Travelers
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-0 z-10 mt-2 w-full origin-top-right 
                    rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 
                    focus:outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

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

export default OfferTab;
