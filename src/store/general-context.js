import React, { useState } from "react";

const GeneralContext = React.createContext({
  //we will declare and initialize them in the later part, so the code here only for readability and intelSense, no technical effect
  //notice everything you get from localStorage will be string, since we rely on localStorage, here everything will be string to let intelSense remind user these thing will be string when we access them.
  eventIdSelected: null,
  eventEventModified: false,
  viewSelected: "",
  handleChangeView: (view) => {},
  handleSelectEvent: (eventId) => {},
  handleEventModified: () => {},
});

export const GeneralContextProvider = (props) => {
  const [viewSelected, setViewSelected] = useState("");
  const [eventIdSelected, setEventIdSelected] = useState(null);
  const [eventEventModified, setEventModified] = useState(false);
  const handleChangeView = (view) => {
    setViewSelected(view);
  };
  const handleSelectEvent = (eventId) => {
    setEventIdSelected(eventId);
  };
  const handleEventModified = () => {
    setEventModified((prev) => {
      return !prev;
    });
  };
  //provide an interface for components to use i.e. generalCtx.xxx
  const contextValue = {
    eventEventModified: eventEventModified,
    eventIdSelected: eventIdSelected,
    viewSelected: viewSelected,
    handleChangeView: handleChangeView,
    handleSelectEvent: handleSelectEvent,
    handleEventModified: handleEventModified,
    handleChangeView: handleChangeView,
  };

  return <GeneralContext.Provider value={contextValue}>{props.children}</GeneralContext.Provider>;
};

export default GeneralContext;
