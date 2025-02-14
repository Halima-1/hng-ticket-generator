import { useState } from "react";
import "./index.css";
// import "./register.scss";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Image from "./component/image";
import Booking from "./component/booking";
import PersonalInfo from "./component/personalInfo";
import { BsArrow90DegRight } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import Ticket from "./component/ticket";
function Register() {
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
          <Booking />
          <PersonalInfo />
        </div>
        <h3>Attendee details</h3>
        <Ticket />
      </section>
    </>
    // <div className="register-container">
    //   {/* <p>{user.name}</p>

    //   <button onClick={changeUser}>Increase</button> */}
    //   <Image />
    //   <form
    //     action=""
    //     onSubmit={(event) => {
    //       event.preventDefault();
    //       handleSubmit();
    //     }}
    //   >
    //     {/* <h2 style={({ color: "navy", marginBottom: 30 })}>Sign up</h2> */}
    //     <input
    //       className="formInput"
    //       type="text"
    //       name="email"
    //       value={category}
    //       disabled
    //       onChange={handleChange}
    //       style={{ color: "blue" }}
    //     />
    //     <input
    //       className="formInput"
    //       type="text"
    //       name="fname"
    //       id=""
    //       placeholder="Name"
    //       value={formData.fname}
    //       onChange={handleChange}
    //     />

    //     {errData.fname && <p style={{ color: "red" }}>{errData.fname}</p>}
    //     <input
    //       className="formInput"
    //       type="text"
    //       name="email"
    //       value={formData.email}
    //       placeholder="email"
    //       onChange={handleChange}
    //     />
    //     {errData.email && <p style={{ color: "red" }}>{errData.email}</p>}
    //     <input
    //       className="formInput"
    //       type="text"
    //       name="username"
    //       value={formData.username}
    //       placeholder="username"
    //       onChange={handleChange}
    //     />
    //     {errData.username && <p style={{ color: "red" }}>{errData.username}</p>}
    //     <input
    //       className="formInput"
    //       type="tel"
    //       name="phone"
    //       value={formData.phone}
    //       placeholder="Phone Number"
    //       onChange={handleChange}
    //     />
    //     {errData.phone && <p style={{ color: "red" }}>{errData.phone}</p>}
    //     <input
    //       className="formInput"
    //       type="password"
    //       name="password"
    //       value={formData.password}
    //       placeholder="Password"
    //       onChange={handleChange}
    //     />
    //     {errData.password && <p style={{ color: "red" }}>{errData.password}</p>}
    //     <input
    //       className="formInput"
    //       type="password"
    //       name="cpass"
    //       value={formData.cpass}
    //       placeholder="Confirm Password"
    //       onChange={handleChange}
    //     />
    //     {errData.cpass && <p style={{ color: "red" }}>{errData.cpass}</p>}
    //     <p style={{ color: "navy" }}>
    //       Already have an account? <Link to={"/login"}>Sign in</Link>
    //     </p>
    //     <input className="submit-btn" type="submit" value={"Sign up"} />
    //   </form>
    // </div>
  );
}

export default Register;
