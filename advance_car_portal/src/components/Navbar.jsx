import React, {useRef, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import  userContext  from "../UserContext";

const Navbar = () => {
  const {setNavHeight} = useContext(userContext);
  const divRef = useRef(null);
  useEffect(()=>{
    if (divRef.current) {
      setNavHeight(divRef.current.offsetHeight);
    }
  },[divRef, setNavHeight]);
  // console.log(height);
  
  return (
    <nav ref={divRef} className="bg-gray-100 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold mr-4">Car Rental</Link>

        <div className="flex justify-center items-center px-2">
          <div className="flex bg-slate-200 items-center border rounded-xl pl-2">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <input type="text" placeholder="Search..." className="ml-1 p-1 outline-none" />
          </div>
          <Link to="/login" className="mx-2 hover:bg-slate-300 p-1 rounded-xl">Login</Link>
          <Link to="/register" className="mx-2 hover:bg-slate-300 p-1 rounded-xl">Register</Link>
          <Link to="/user-profile" className="mx-2 hover:bg-slate-300 p-1 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
          <Link to="/admin-dashboard" className="mx-2 hover:bg-slate-300 p-1 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
          </Link>
        </div>

      </div>
      <div className="flex justify-center">
        <div className="border border-t-1 border-slate-300 w-full"></div>
      </div>
      <div className="flex justify-center py-2">
        <ul className="flex space-x-8 text-gray-600">
          <li className="hover:text-gray-800 cursor-pointer font-semibold text-lg bg-gray-200 py-1 px-3 rounded-xl">Home</li>
          <li className="hover:text-gray-800 cursor-pointer font-semibold text-lg bg-gray-200 py-1 px-3 rounded-xl">About</li>
          <li className="hover:text-gray-800 cursor-pointer font-semibold text-lg bg-gray-200 py-1 px-3 rounded-xl">Cars</li>
          <li className="hover:text-gray-800 cursor-pointer font-semibold text-lg bg-gray-200 py-1 px-3 rounded-xl">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
