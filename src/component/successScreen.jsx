import React from "react";
import "../styles/ticket.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
function Ticket() {
  const attendee = JSON.parse(localStorage.getItem("attendee"));
  const infoCont = document.getElementById("info-container");

  const info = document.getElementById("personal-info");
  const intro = document.getElementById("intro");
  const ticket = document.getElementById("ticket-container");
  const prevpage = () => {
    (info.style.display = "block"), (intro.style.display = "none");
    ticket.style.display = "none";
    infoCont.style.display = "block";
  };
  return (
    <>
      <div className="progress-bar">
        <p>Ready</p>
        <p>3/3</p>
      </div>
      <div className="success">
        <h2>Your Ticket is Booked!</h2>
        <p>Check your email for a copy or you can download</p>
      </div>
      <div className="ticket-frame">
        <div className="ticket-container">
          <h2>Techember Fest''25</h2>
          <p>
            <HiOutlineLocationMarker color="red" /> Techember"25 || March 15,
            2025 | 7.00pm
          </p>{" "}
          <div className="ticket-img">
            <img src={localStorage.getItem("url")} alt="user" />
          </div>
        </div>
        <div className="details">
          <div>
            <p> Enter your name</p>
            {attendee && <b>{attendee.fname}</b>}
          </div>
          <div>
            <p> Enter your email</p>
            <b>{attendee.email.slice(0, 12)} ...</b>
          </div>
          <div>
            <p> Ticket type</p>
            <b>{attendee.ticket}</b>
          </div>
          <div>
            <p> No of ticket</p>
            <b>{attendee.ticketQuantity}</b>
          </div>
        </div>
      </div>
      <div className="second-frame">
        <p>We are looking forward to seeing you!</p>
      </div>
      <div className="ticket-btn">
        <input onClick={prevpage} type="button" value="Book another ticket" />
        <input type="button" value="Download ticket" />
      </div>
    </>
  );
}

export default Ticket;
