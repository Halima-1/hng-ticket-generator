import React from "react";
import "../styles/ticket.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ProgressBar from "./progress3";

function Ticket() {
  const attendee = JSON.parse(localStorage.getItem("attendee"));
  const infoCont = document.getElementById("info-container");

  const info = document.getElementById("attendeeForm");
  const intro = document.getElementById("booking");
  const ticket = document.getElementById("ticket-container");
  const prevpage = () => {
    infoCont.style.display = "block";

    info.style.display = "block";
    intro.style.display = "none";
    ticket.style.display = "none";
  };
  console.log(attendee);
  return (
    <>
      <div className="progress-bar">
        <p>Ready</p>
        <p>3/3</p>
      </div>
      <ProgressBar />

      <div className="success">
        <h2>Your Ticket is Booked!</h2>
        <p>Check your email for a copy or you can download</p>
      </div>
      <div className="ticket-frame">
        <div className="ticket-container">
          <h1>Techember Fest''25</h1>
          <p>
            <HiOutlineLocationMarker color="red" /> Techember"25 || March 15,
            2025 | 7.00pm
          </p>{" "}
          <div className="ticket-img">
            <img src={attendee.image} alt="user" />
          </div>
        </div>
        <div className="details">
          <div>
            <p> name:</p>
            {attendee && <b>{attendee.fname}</b>}
          </div>
          <div>
            <p>email:</p>
            {attendee && attendee ? <b>{attendee.email}</b> : <b></b>}
          </div>
          <div>
            <p> Ticket:</p>
            {attendee && attendee ? <b>{attendee.ticket}</b> : <b></b>}
          </div>
          <div>
            <p> No of ticket</p>
            {attendee ? <b>{attendee.ticketQuantity}</b> : <b></b>}
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
