import React, { useRef, useState } from "react";
// import Image from "./image";
import "../styles/PersonalInfo.css";
import "../styles/image.css";

import { BiCloudDownload } from "react-icons/bi";
function PersonalInfo() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [isdragging, setIsdragging] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const fileInputRef = useRef(null);

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
  const drop = async (event) => {
    event.preventDefault();
    setIsdragging(false);
    const file = event.dataTransfer.files[0];
    // JSON.stringify(localStorage.setItem("url", uploadURL.url));
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
  };
  const profilePic = localStorage.getItem("url");

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    image: profilePic,
  });
  const [errData, setErrData] = useState({});
  console.log(formData.image);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleValidation = () => {
    const newErr = {};
    // newErr.image = "";

    if (formData.image == "" || formData.image === null) {
      newErr.image = "upload a profile pic";
    } else if (formData.image !== "") {
      newErr.image = "";
    } else if (formData.fname == "") {
      newErr.fname = "name require";
    } else if (formData.email == "") {
      newErr.email = "valid email required";
    }
    setErrData(newErr);
  };

  // form validation
  const handleSubmit = () => {
    handleValidation();
    if (errData) {
      localStorage.setItem("attendee", JSON.stringify(formData));

      // const attendee = localStorage.getItem("attendee")
      //   ? JSON.parse(localStorage.getItem("attendee"))
      //   : [];

      const users = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];

      const emailValidation = users.find(
        (item) => item.email == formData.email
      );
      if (emailValidation) {
        console.log("Email Already Exist");
        return;
      }
      console.log(errData);
      users.push(formData);

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      return;
    }
  };
  console.log(formData.image);
  console.log(errData);

  // mouse over image
  const mouseOverr = () => {
    setMouseOver(true);
    document.getElementById(
      "img-contt"
    ).style.backgroundImage = `url(${localStorage.getItem("url")})`;
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
            {errData && errData.image == "" ? (
              <>
                <span>{errData.image}</span>
              </>
            ) : null}
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
            required
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
            required
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
          <input className="submit-btn" type="submit" value={"Back"} />
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
