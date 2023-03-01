import React from "react";
import "./About.css";
import { Button, Typography } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from '../../../images/logo1.png';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img className="imgofAbout" src={logo} alt="" />
            <Typography>Furniture Style</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <h2 className="aboutH2"> Give you're Health a New Style</h2>.
            <span>
               we care about you're health that's why we are here with India's No.1 100% Chemical free Natrual Products for Your Breakfase Lunch and Dinner
            </span>

            <span className="aboutSpan">
            FSSAI Lic No. :
            </span>

            <span className="aboutSpan1">
            20211209103066047
            </span>

            
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            {/* <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a> */}

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;