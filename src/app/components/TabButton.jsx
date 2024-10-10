import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#070042]" : "text-[#474aa6]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};
export default TabButton;
