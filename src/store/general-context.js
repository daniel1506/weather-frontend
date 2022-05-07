import React, { useState } from "react";

const GeneralContext = React.createContext({
  //we will declare and initialize them in the later part, so the code here only for readability and intelSense, no technical effect
  //notice everything you get from localStorage will be string, since we rely on localStorage, here everything will be string to let intelSense remind user these thing will be string when we access them.
  eventIdSelected: null,
  eventEventModified: false,
  searchWord: "",
  locationModified: 0,
  handleSelectEvent: (eventId) => {},
  handleEventModified: () => {},
  setSearchWord: () => {},
  handleLocationModified: () => {},
});

export const GeneralContextProvider = (props) => {
  const [eventIdSelected, setEventIdSelected] = useState(null);
  const [eventEventModified, setEventModified] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [locationModified, setLocationModified] = useState(0);
  const handleSelectEvent = (eventId) => {
    setEventIdSelected(eventId);
  };
  const handleEventModified = () => {
    setEventModified((prev) => {
      return !prev;
    });
  };
  const handleLocationModified = () => {
    setLocationModified((prev) => {
      return prev + 1;
    });
  };
  //provide an interface for components to use i.e. generalCtx.xxx
  const contextValue = {
    eventEventModified: eventEventModified,
    eventIdSelected: eventIdSelected,
    searchWord: searchWord,
    handleSelectEvent: handleSelectEvent,
    handleEventModified: handleEventModified,
    handleLocationModified: handleLocationModified,
    setSearchWord: setSearchWord,
  };

  return <GeneralContext.Provider value={contextValue}>{props.children}</GeneralContext.Provider>;
};

export default GeneralContext;
