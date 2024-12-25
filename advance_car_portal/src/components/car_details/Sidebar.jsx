import React from "react";
// import  userContext  from "../UserContext";

const Sidebar = () => {
  // const {navHeight} = useContext(userContext);
  const arr = ['Car', 'Price', 'Compare', 'Images', 'Specs', 'User', 'Reviews', 'View', 'Variants', 'Videos'];
  // console.log(navHeight); 
  
  return (
    <div className={`w-1/12 p-4 bg-gray-200 space-y-2 rounded-lg fixed left-5`}>
      {
        arr.map((item, index) => {
          return (
            <div key={index}>
              <button className="w-full py-2 bg-gray-300 rounded">{item}</button>
            </div>)
        })}
    </div>
  );
};

export default Sidebar;
