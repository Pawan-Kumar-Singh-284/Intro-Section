import "./Header.css";
import logo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import menuOpen from "../assets/images/icon-menu.svg";

import menuClose from "../assets/images/icon-close-menu.svg";
import todoList from "../assets/images/icon-todo.svg";
import calender from "../assets/images/icon-calendar.svg";
import planning from "../assets/images/icon-planning.svg";
import reminder from "../assets/images/icon-reminders.svg";
import { useState } from "react";


function Header() {


  const [features, setFeatures]=useState(false);
const [company, setCompany]=useState(false);

  const handleMenuOpen = () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-close");
    navbar.classList.toggle("open");
    if (navbar.classList.contains("open")) {
      menuButton.src = menuClose;
    } else {
      menuButton.src = menuOpen;
    }
  };
  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="flex lg:items-start lg:justify-start">
          <img src={logo} alt="logo" className="lg:mr-5" />

          <nav className="navbar">
            <div>
              <button className="flex items-center justify-start" onClick={()=>{setFeatures(!features)}}>
                Features {features? <img src={arrowUp} alt="down" className="ml-2" />:<img src={arrowDown} alt="down" className="ml-2" />}
              </button>
              {features && <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={todoList} alt="todo" className="mr-2"/>  textodolist
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={calender} alt="calender" className="mr-2" /> Calendar
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={reminder} alt="reminder" className="mr-2" /> Reminders
                </li> 
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={planning} alt="planning" className="mr-2" /> Planning
                </li>
              </ul>}
            </div>
            <div>
              <button className="flex items-center justify-start" onClick={()=>setCompany(!company)}>
                Company {company?<img src={arrowUp} alt="down" className="ml-2" />:<img src={arrowDown} alt="down" className="ml-2" />}
              </button>
              {company && <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2">
                 History
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                 Our Team
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  Blog
                </li> 
                <li className="flex items-center justify-start text-sm mb-2">
                 
                </li>
              </ul>}
            </div>
            <div className="mb-2 lg:mb-0">
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>
        <div className="lg:hidden">
          <button onClick={handleMenuOpen}>
            <img src={menuOpen} className="menu-close" alt="menu" />
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button  className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl ">Register</button>
        </div>
      </header>
    </>
  );
}

export default Header;
