import Link from "next/link";
import React from "react";
// here implements navbar
function NavbarPage() {
  // home about service contact plan contact use

  const Links = (
    <>
      

          <li >
            <Link href={"/"} className="text-green-300">Home</Link>
          </li>
          <li>
            <Link href={"/about"} className="text-white">About</Link>
          </li>
          <li>
            <Link href={"/services"} className="text-white">Services</Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-white">Contact</Link>
          </li>
          <li>
            <Link href={"/plan"} className="text-white">Plan</Link>
          </li>
    
    </>
  );

  return (
    <div>
      <div className="navbar  shadow-sm 
  
      
       backdrop-blur-xl  fixed p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Ai Learning </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
        <ul>
          {/* contact use */}
          <li>
            <Link href={"/contact-us"} className="btn 
            border-t-8
            hover:border-t-4
            hover:border-b-4
            transition duration-300 
            delay-200 mr-6
        


            
            
            border-b-8 border-blue-300 ">Contact us</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarPage;
