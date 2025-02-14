import React from "react";
import "../styles/ticket.css";
function Ticket() {
  const attendee = JSON.parse(localStorage.getItem("attendee"));
  return (
    <>
      <section className="ticket-frame">
        <div className="ticket-container">
          <h2>Techember Fest''25</h2>
          <p>check your email for a copy or you can download</p>
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
            <b>free</b>
          </div>
          <div>
            <p> No of ticket</p>
            <b>1</b>
          </div>
        </div>
      </section>
      <div className="second-frame">
        <p>We are looking forward to seeing you!</p>
      </div>
      <div className="ticket-btn">
        <input type="button" value="Book another ticket" />
        <input type="button" value="Download ticket" />
      </div>
    </>
  );
}

export default Ticket;
