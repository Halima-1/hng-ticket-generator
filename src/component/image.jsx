// import React, { useRef, useState } from "react";
// import "../styles/image.css";
// import { BiCloudDownload, BiCloudUpload } from "react-icons/bi";

// function Image({ err }) {
//   const [loading, setLoading] = useState(false);
//   const [image, setImage] = useState([]);
//   const [isdragging, setIsdragging] = useState(false);
//   const fileInputRef = useRef(null);

//   function selectFile() {
//     fileInputRef.current.click();
//   }
//   async function onFileSelect(event) {
//     const file = event.target.files[0];
//     if (!file) return;
//     setLoading(true);

//     console.log(file);
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "first-cloudi-img");
//     data.append("cloud_name", "dazhgt4qv");

//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/dazhgt4qv/image/upload

//     `,
//       {
//         method: "POST",
//         body: data,
//       }
//     );

//     const uploadURL = await res.json();
//     console.log(file.name);
//     console.log(uploadURL);
//     JSON.stringify(localStorage.setItem("url", uploadURL.url));
//     setLoading(false);
//     // for ( let i =0i)
//   }

//   //   const handleUpload = async (event) => {
//   //     const file = event.target.files[0];

//   //     if (!file) return;
//   //     setLoading(true);

//   //     const data = new FormData();
//   //     data.append("file", file);
//   //     data.append("upload_preset", "first-cloudi-img");
//   //     data.append("cloud_name", "dazhgt4qv");

//   //     const res = await fetch(
//   //       `https://api.cloudinary.com/v1_1/dazhgt4qv/image/upload

//   // `,
//   //       {
//   //         method: "POST",
//   //         body: data,
//   //       }
//   //     );

//   // const uploadURL = await res.json();
//   // console.log(file.name);
//   // console.log(uploadURL.url);
//   // setLoading(false);
//   // };
//   const dragOver = (event) => {
//     event.preventDefault();
//     setIsdragging(true);
//     event.dataTransfer.dropEffect = "copy";
//   };
//   const dragLeave = (event) => {
//     event.preventDefault();
//     setIsdragging(false);
//   };
//   const drop = async (event) => {
//     event.preventDefault();
//     setIsdragging(false);
//     const file = event.dataTransfer.files[0];
//     // JSON.stringify(localStorage.setItem("url", uploadURL.url));
//     if (!file) return;
//     setLoading(true);

//     console.log(file);
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "first-cloudi-img");
//     data.append("cloud_name", "dazhgt4qv");

//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/dazhgt4qv/image/upload

//     `,
//       {
//         method: "POST",
//         body: data,
//       }
//     );

//     const uploadURL = await res.json();
//     console.log(file.name);
//     console.log(uploadURL);
//     JSON.stringify(localStorage.setItem("url", uploadURL.url));
//     setLoading(false);
//   };
//   console.log(isdragging);
//   return (
//     <>
//       <div className="img-upload">

//       </div>

//       <div>{/* <p>drag and drop file here</p> */}</div>
//     </>
//   );
// }

// export default Image;
