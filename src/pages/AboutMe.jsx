import React from "react";
import "../style/style.css";
import { Box, Grid } from "@mui/material";
import Pi from "../assets/icons8-about-me-female-50.png";
import Un from "../assets/icons8-username-48.png";
import BDay from "../assets/icons8-birthday-cake.gif";
import Ongoing from "../assets/icons8-loading-indicator-78.png";
import Phone from "../assets/icons8-mobile-phone-48.png";
import Mail from "../assets/icons8-mail-94.png";

const AboutMe = () => {
  const name = "Abu Sufian";
  const birthday = "20 DEC, 2003";
  const ongoing = "Lithan Academy (Roehampton University)  ";
  const phone = "+880187816636";
  const email = "abu053125@gmail.com";
  return (
    <div
      className="about text-white"
      id="about"
      style={{ width:"100%", paddingBottom: "20px" }}
    >
      <h1 className="text-center text-4xl font-bold text-yellow-500 underline underline-offset-8 ">
        About Me
      </h1>
      <Grid container spacing={2} className="py-7">
        {/* add the CSS class for centering */}
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>

        <Grid container spacing={2} className=" ">
        <Grid item xs={3} className="flex justify-items-center">
        <div className="text-lg py-4">
    <div>
      <strong>Name:</strong>
      <span className="text-gray-300">{name}</span>
    </div>
    <div>
      <strong>Birthday:</strong>
      <span className="text-gray-300">{birthday}</span>
    </div>
    <div>
      <strong>Ongoing:</strong>
      <span className="text-gray-300">{ongoing}</span>
    </div>
    <div>
      <strong>Phone:</strong>
      <span className="text-gray-300">{phone}</span>
    </div>
    <div>
      <strong>Email:</strong>
      <span className="text-gray-300">{email}</span>
    </div>
  </div>
        </Grid>
        <Grid item xs={9}>
        <div className="text-gray-400 border-l-2 pl-5 py-2 text-lg">
          I am a budding software engineer currently pursuing an Applied Degree in Software Engineering at Lithan Academy. Additionally, I am soon to take a Bachelor's Degree in Computer Science at Rohempton University. I have a strong passion for technology and a desire to make a difference in the world of software engineering. Throughout my time at Lithan Academy, I have gained valuable hands-on experience developing software solutions for real-world problems using programming languages such as Java, JavaScript, and PHP. I am excited to continue building on this foundation and further develop my skills as a software engineer.
          </div>

        </Grid>

</Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
