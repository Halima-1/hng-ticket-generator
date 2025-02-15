import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ProgressBar from "./progress1";
function Booking() {
  const [errMessage, setErMessage] = useState({});
  const [ticketNum, setTicketNum] = useState({
    ticketQuantity: "",
  });
  localStorage.setItem("ticket-quantity", ticketNum.ticketQuantity);

  const handleChange = (e) => {
    localStorage.setItem("ticket-quantity", ticketNum.ticketQuantity);

    const value = e.target.value;
    setTicketNum({ ...ticketNum, [e.target.name]: value });
  };
  console.log(ticketNum);
  const next = () => {
    const err = {};
    const info = document.getElementById("attendeeForm");
    const intro = document.getElementById("booking");
    const ticket = document.getElementById("ticket-container");

    const ticketQuantity = document.getElementById("ticket-num").value;
    localStorage.setItem("ticket-quantity", ticketNum.ticketQuantity);
    if (
      localStorage.getItem("ticket-type") &&
      localStorage.getItem("ticket-quantity")
    ) {
      (info.style.display = "block"), (intro.style.display = "none");
      ticket.style.display = "none";
    } else {
      err.message = "select ticket type and quantity";
    }
    setErMessage(err);
  };

  const free = () => {
    const info = document.getElementById("free").textContent;
    localStorage.setItem("ticket-type", info);
  };
  const vip = () => {
    const info = document.getElementById("vip").textContent;
    localStorage.setItem("ticket-type", info);
  };
  const vvip = () => {
    const info = document.getElementById("vvip").textContent;
    localStorage.setItem("ticket-type", info);
  };
  // const ticketQuantity = () => {

  // };/
  return (
    <>
      <div className="intro">
        <h1>TECHEMBER"25</h1>
        <p>
          Join us for an unforgettable experience at Techember fest! Secure your
          spot now!
        </p>
        <p>
          <HiOutlineLocationMarker color="red" /> Techember"25 || March 15, 2025
          | 7.00pm
        </p>
      </div>
      <hr />
      <p>Select ticket type:</p>

      <div id="ticket">
        <div className="ticket-type">
          <span>Free</span> <br />{" "}
          <span onClick={free} id="free">
            Regular
          </span>{" "}
          <br /> <span>20/52</span>
        </div>
        <div className="ticket-type">
          <b>$150</b> <br />{" "}
          <span id="vip" onClick={vip}>
            VIP
          </span>{" "}
          <br /> <span>20/52</span>
        </div>
        <div className="ticket-type">
          <b>$250</b> <br />{" "}
          <span id="vvip" onClick={vvip}>
            VVIP
          </span>{" "}
          <br /> <span>20/52</span>
        </div>
      </div>
      <div className="ticket-num">
        {/* <p>Number of Ticket:</p> */}
        <label htmlFor="ticketQuantity">Number of Ticket:</label>
        {/* <select name="ticket-num" id="ticket-num">
          <option value="1">1</option>
          <option value="">2</option>
          <option value=""></option>
        </select> */}
        <input
          type="number"
          name="ticketQuantity"
          id="ticket-num"
          placeholder="enter ticket quantity"
          value={ticketNum.ticketQuantity}
          onChange={handleChange}
        />
      </div>
      {errMessage && (
        <>
          <p style={{ color: "red" }}>{errMessage.message}</p>
        </>
      )}
      <div className="btn">
        <input type="button" value="Cancel" />
        <input onClick={next} type="button" value="Next" />
      </div>
    </>
  );
}

export default Booking;
