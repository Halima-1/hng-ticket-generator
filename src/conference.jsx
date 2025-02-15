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
import ProgressBarOne from "./component/progress1";

import ProgressBarTwo from "./component/progress2";
import ProgressBarThree from "./component/progress3";

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
        <div id="booking">
          <div className="progress-bar">
            <p>Ticket Selection</p>
            <p>step 1/3</p>
          </div>
          <ProgressBarOne />
          <div id="info-container">
            <Booking />
          </div>
        </div>

        <div id="attendeeForm" style={{ display: "none" }}>
          <div className="progress-bar">
            <p>Attendee details</p>
            <p>2/3</p>
          </div>
          <ProgressBarTwo />

          <div id="info">
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
