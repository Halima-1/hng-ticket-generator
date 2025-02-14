import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Register from "./register";
// import Image from "./component/image";
import PersonalInfo from "./component/personalInfo";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}>
            <Route path="/" element={<Register />} />
            {/* <Route path="/image" element={<Image />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
