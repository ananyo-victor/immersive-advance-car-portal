import React from "react";

const Sidebar = () => {
  const arr = ['Car', 'Price', 'Compare', 'Images', 'Specs', 'User', 'Reviews', 'View', 'Variants', 'Videos'];
  return (
    <div className="w-1/12 p-4 bg-gray-200 space-y-2 rounded-lg fixed left-5">
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
