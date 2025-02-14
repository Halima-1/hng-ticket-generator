import { useState } from "react";
import "./index.css";
// import "./register.scss";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Image from "./component/image";
import Booking from "./component/ticketCard";
import PersonalInfo from "./component/attendeeForm";
import { BsArrow90DegRight } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import Ticket from "./component/successScreen";
function Conference() {
  // const [formstep, setFormStep] =useState(0)
  // const completeForm =()=>{
  //   setFormStep (cur + 1)
  // }
  // const renderPage =()=>{
  //   if(formstep > 2){
  //     return undefined
  //   }
  //   else if(formstep === 0){
  // return(

  // )
  //   }
  // }
  return (
    <>
      <header>
        <h2>Ticket</h2>
        <nav>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/cart"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Event
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/cart"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              My Ticket
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"nav-item"}
              to={"/cart"}
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              About Project
            </NavLink>
          </li>
        </nav>
        <button type="button" className="btnn">
          Ticket
          <>
            <CgArrowTopRight />
          </>
        </button>
      </header>
      <section id="info">
        <div id="info-container">
          <div id="intro">
            <Booking />
          </div>
          <div id="personal-info">
            <div className="progress-bar">
              <p>Attendee details</p>
              <p>2/3</p>
            </div>
            <PersonalInfo />
          </div>
        </div>
        <div id="ticket-container">
          <Ticket />
        </div>
      </section>
    </>
  );
}

export default Conference;
