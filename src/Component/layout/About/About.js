import React from "react";
import "./About.css";
import { Button, Typography } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from '../../../images/logo1.png';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/furni.style.in/?igshid=YmMyMTA2M2Y%3D";
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
            <Typography>Furni style</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <h2 className="aboutH2">Give Your Home A New Look</h2>.
            <span>
               we are here to serve you 24×7 just order your favourite furniture to enjoy the lifetime service from us for you
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
            <a
              href="https://m.facebook.com/115752483146207/"
              target="blank"
            >
              <FacebookIcon className="fbSvgIcon" />
            </a>

            <a href="https://www.instagram.com/furni.style.in/?igshid=YmMyMTA2M2Y%3D" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;