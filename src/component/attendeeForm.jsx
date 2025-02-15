import React, { useRef, useState } from "react";
import "../styles/image.css";
import "../index.css";
import { BiCloudDownload } from "react-icons/bi";
function PersonalInfo() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [isdragging, setIsdragging] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const fileInputRef = useRef(null);
  const info = document.getElementById("attendeeForm");
  const intro = document.getElementById("booking");
  const infoCont = document.getElementById("info-container");
  const ticket = document.getElementById("ticket-container");
  //  to select image for the ticket
  function selectFile() {
    fileInputRef.current.click();
  }
  async function onFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);

    console.log(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first-cloudi-img");
    data.append("cloud_name", "dazhgt4qv");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dazhgt4qv/image/upload
  
    `,
      {
        method: "POST",
        body: data,
      }
    );

    const uploadURL = await res.json();
    console.log(file.name);
    console.log(uploadURL);
    JSON.stringify(localStorage.setItem("url", uploadURL.url));
    setLoading(false);
    // for ( let i =0i)
  }
  const dragOver = (event) => {
    event.preventDefault();
    setIsdragging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const dragLeave = (event) => {
    event.preventDefault();
    setIsdragging(false);
  };

  // To drag and drop image
  const drop = async (event) => {
    event.preventDefault();
    setIsdragging(false);
    const file = event.dataTransfer.files[0];
    if (!file) return;
    setLoading(true);

    console.log(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first-cloudi-img");
    data.append("cloud_name", "dazhgt4qv");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dazhgt4qv/image/upload
  
    `,
      {
        method: "POST",
        body: data,
      }
    );

    const uploadURL = await res.json();
    console.log(file.name);
    console.log(uploadURL);
    JSON.stringify(localStorage.setItem("url", uploadURL.url));
    document.getElementById("imgErr").innerHTML = "";
    setLoading(false);
  };
  const ticketType = localStorage.getItem("ticket-type");
  const profilePic = localStorage.getItem("url");
  const ticketQuantityy = localStorage.getItem("ticket-quantity");
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    image: profilePic ? profilePic : "",
    ticket: ticketType ? ticketType : "",
    ticketQuantity: ticketQuantityy ? ticketQuantityy : "",
  });
  const [errData, setErrData] = useState({});
  console.log(formData.image);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  console.log(formData.ticketQuantity);
  const handleValidation = () => {
    const newErr = {};
    // newErr.image = "";

    if (formData.image == "") {
      newErr.image = "upload a profile pic";
    } else if (formData.fname == "") {
      newErr.fname = "name require";
    } else if (formData.email == "") {
      newErr.email = "valid email required";
    }
    setErrData(newErr);
  };
  // console.log(errData.image);
  // form validation
  const handleSubmit = () => {
    handleValidation();
    if (!errData.email) {
      localStorage.setItem("attendee", JSON.stringify(formData));

      // console.log(errData.fname);
      info.style.display = "none";
      intro.style.display = "none";
      ticket.style.display = "block";

      infoCont.style.display = "none";

      // localStorage.removeItem("url");
      // localStorage.removeItem("ticket-type");
      // localStorage.removeItem("ticket-quantity");

      // attendee ? <b>{attendee.ticket}</b> : <b></b>;
    } else {
      return;
    }
    console.log(errData);
  };
  console.log(formData.fname);
  console.log(errData.length);

  // mouse over image
  const mouseOverr = () => {
    setMouseOver(true);
    document.getElementById(
      "img-contt"
    ).style.backgroundImage = `url(${localStorage.getItem("url")})`;
  };
  const prevpage = () => {
    info.style.display = "none";
    intro.style.display = "block";
    ticket.style.display = "none";
    infoCont.style.display = "block";
  };
  return (
    <>
      <form
        id="img-upload"
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <span>Upload profile photo</span>
        <div className="upload-bg">
          <div
            className="img-cont"
            id="img-contt"
            onMouseOver={mouseOverr}
            onMouseLeave={() => {
              setMouseOver(false);
              document.getElementById("img-contt").style.backgroundImage =
                "none";
            }}
            onDrop={drop}
            onDragOver={dragOver}
            onDragLeave={dragLeave}
          >
            {errData && (
              <>
                <span id="imgErr" style={{ color: "red" }}>
                  {profilePic ? "" : errData.image}
                </span>
              </>
            )}
            {isdragging ? (
              <>
                <p>drop image here</p>
              </>
            ) : (
              <>
                {/* //    <img src="upload.svg" alt="" /> */}
                <BiCloudDownload />
                <p>
                  {" "}
                  drag and drop image here or{" "}
                  <span onClick={selectFile} role="button" name="image">
                    browse
                  </span>
                </p>
              </>
            )}

            <input
              type="file"
              onChange={onFileSelect}
              name=""
              id=""
              multiple
              // hidden
              ref={fileInputRef}
            />
          </div>
        </div>

        <hr />
        {/* <h2 style={({ color: "navy", marginBottom: 30 })}>Sign up</h2> */}
        <div className="input-cont">
          <label htmlFor="name"> Enter your full name</label>
          <input
            className="formInput"
            type="text"
            name="fname"
            id="name"
            placeholder="Name"
            // required
            value={formData.fname}
            onChange={handleChange}
          />

          {errData.fname && <p style={{ color: "red" }}>{errData.fname}</p>}
        </div>
        <div className="input-cont">
          <label htmlFor="email">Enter your email:</label>
          <input
            className="formInput"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="hello@gmail.com"
            onChange={handleChange}
            // required
          />
          {errData.email && <p style={{ color: "red" }}>{errData.email}</p>}
        </div>
        <div className="input-cont">
          <label htmlFor="text">
            Special request?
            <textarea
              name="text"
              id="text"
              // value="                  Text area
              placeholder="Text area"
            ></textarea>
          </label>
        </div>
        <div className="btn-cont">
          <input
            onClick={prevpage}
            className="submit-btn"
            type="button"
            value={"Back"}
          />
          <input
            className="submit-btn"
            type="submit"
            value={"Get my free ticket"}
          />
        </div>
      </form>
    </>
  );
}

export default PersonalInfo;
