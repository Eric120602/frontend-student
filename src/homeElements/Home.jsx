import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/easyClcar.jpg";
import "../homestyles/Home.css";
import { grey } from "@mui/material/colors";
import { checkLogin } from "../session/session";

// import { PackagesList } from "../packages/PackagesList";
// import Packagess from "../components/packagess";

function Home() {



  return (
    <div className='new'>
      <div className="Home"
      //  style={{ backgroundImage: `url(${BannerImage})` }}
      >

        <div className="headerContainer">
          {/* <div className="head"> */}
          <h1>Easy Clutch</h1>
          {/* </div> */}
          {/* <div className="cont"> */}
          <h2>DON'T STOP JUST DRIVE</h2>
          <p style={{ color: "violet" }}>We Provide the best help</p>
          Welcome to our driving school! We're thrilled to have you here. Whether you're a beginner eager to hit the road or looking to polish your driving skills, our experienced instructors are ready to guide you on your journey. Our comprehensive driving lessons, flexible schedules, and personalized training ensure that you receive the best learning experience tailored to your needs. Explore our site to discover our range of services, convenient online booking, and competitive fee packages. Join us today and let's embark on an exciting adventure towards becoming a confident and skilled driver. See you behind the wheel!

          {
            !checkLogin() &&


            <>
              {/* <p style={{ color: "white" }}> */}


              {/* </div>
        <div className="contan"> */}
              <h3>create a new account</h3>
              <Link to="/register">
                <button className="btn">register now</button>
              </Link>
              <h3>login to existing account</h3>
              <Link to="/login">
                <button className="btn">Student login</button>
              </Link>

              {/* </div> */}
            </>
          }

          <br></br>
        </div>

      </div>
    </div>
  );
}




export default Home;

