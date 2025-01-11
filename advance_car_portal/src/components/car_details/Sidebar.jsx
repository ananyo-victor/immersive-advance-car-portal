import React from "react";
// import  userContext  from "../UserContext";

const Sidebar = () => {
  // const {navHeight} = useContext(userContext);
  const arr = ['Car', 'Price', 'Compare', 'Images', 'Specs', 'User', 'Reviews', 'View', 'Variants', 'Videos'];
  // console.log(navHeight); 
  
  return (
    <div className={`flex flex-wrap md:block md:w-1/12 p-4 bg-gray-200 md:space-y-2 md:space-x-0 space-x-2 rounded-lg fixed md:left-5`}>
      {
        arr.map((item, index) => {
          return (
            <div key={index}>
              <button className="w-full p-2 text-xs md:text-sm bg-gray-300 rounded">{item}</button>
            </div>)
        })}
    </div>
  );
};

export default Sidebar;
