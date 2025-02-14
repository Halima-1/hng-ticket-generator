import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Booking() {
  const next = () => {
    const info = document.getElementById("img-upload");
    const intro = document.getElementById("img-upload");
    if (localStorage.getItem("ticket-type")) {
      (info.style.display = "block"), (intro.style.display = "none");
    }
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
  const ticketQuantity = document.getElementById("ticket-num").value;
  localStorage.setItem("ticket-quantity", ticketQuantity);
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
            Regular access
          </span>{" "}
          <br /> <span>20/52</span>
        </div>
        <div className="ticket-type">
          <b>$150</b> <br />{" "}
          <span id="vip" onClick={vip}>
            VIP access
          </span>{" "}
          <br /> <span>20/52</span>
        </div>
        <div className="ticket-type">
          <b>$250</b> <br />{" "}
          <span id="vvip" onClick={vvip}>
            VVIP access
          </span>{" "}
          <br /> <span>20/52</span>
        </div>
      </div>
      <div className="ticket-num">
        <p>Number of Ticket:</p>
        {/* <select name="ticket-num" id="ticket-num">
          <option value="1">1</option>
          <option value="">2</option>
          <option value=""></option>
        </select> */}
        <input
          type="number"
          name=""
          id="ticket-num"
          placeholder="enter ticket quantity"
        />
      </div>
      <div className="btn">
        <input type="button" value="Cancel" />
        <input type="button" value="Next" />
      </div>
    </>
  );
}

export default Booking;
