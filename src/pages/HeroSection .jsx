import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Typewriter from "react-typewriter";
import "../style/style.css";
import profileImage from "../assets/Abu Sufian.jpeg"; // import the image file
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div>
      <div id="intro" className="pt-10">
        <Grid container spacing={2} className="hero">
          <Grid item xs={12}>
            <Grid container spacing={5}>
              {/* add the CSS class for centering */}
              <Grid item xs={12} md={3}>
                {/* empty grid item */}
              </Grid>
              <Grid
                item
                md={3}
                xs={12}
                style={{
                  width: "70%",
                  height: "350px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img className="border rounded-md" src={profileImage} alt="" />
                {/* update the image source */}
              </Grid>
              <Grid
                item
                md={5}
                xs={12}
                className="text-white lg:text-left text-center"
              >
                <h3 className="font-weight text-white text-1xl md:text-3xl mb-3" style={{ fontFamily: "CarFont", background: "-webkit-linear-gradient(#FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                  <Typewriter
                    typing={0.3}
                    minDelay={20}
                    maxDelay={70}
                    onTypingEnd={() => console.log("Typing ended!")}
                  >
                    Hello, I'm Abu Sufian
                  </Typewriter>
                </h3>
                
                <h3
                  className="font-weight text-white text-2xl lg:text-4xl md:text-3xl font-bold mb-3"
                >
                  {" "}
                  A Web Developer in Spring Boot, Java,React JS,PHP
                </h3>
                <h3 className=" text-white text-xl lg:text-2xl  mb-3">
                  {" "}
                  Welcome to my portfolio!
                </h3>
                <Box className="my-4 flex justify-center lg:justify-start items-center">
                 <Box className="mr-2">
                 <Button variant="contained" color="info">
                    <a href="https://drive.google.com/file/d/1mryhnaUpoa-GTd9tKgSpA-Ewqz8j30gd/view?usp=sharing"  target="_blank">
                      MY RESUME
                    </a>
                  </Button>
                 </Box>
                 <Box className="ml-2">
                 <Button variant="contained" color="success">
                    <a href="https://youtu.be/oaeXQ9NOBgM"  target="_blank">
                      Video Introduction
                    </a>
                  </Button>
                 </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                {/* empty grid item */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSection;


