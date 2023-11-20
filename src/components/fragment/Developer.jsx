/*import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Sai Sriram Reddy</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at VIT CHENNAI.</p>
                    <p>Graduating in 2025 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/vishal.kld"} title={"vishal.kld"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/Vishal_kld"}  title={"Vishal_kld"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/vishalsingh-/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/vishalsingh023/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;*/

import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage2 from "../assets/img/avatar.jpg";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developers</h3>
      <div className="Developer-profile">
        {/* Developer 1 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 1" />
          <div className={"Card-details"}>
            <h3>Sai Sriram Reddy</h3>
            <p>Full Stack developer</p>
            <p>Competitive Coder</p>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 2" />
          <div className={"Card-details"}>
            <h3>Surya</h3>
            <p>Frontend Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>

        {/* Developer 3 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 3" />
          <div className={"Card-details"}>
            <h3>Yashwantha Rao</h3>
            <p>Backend Developer</p>
            <p>Database Expert</p>
          </div>
        </div>

        {/* Developer 4 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 4" />
          <div className={"Card-details"}>
            <h3>Revanth</h3>
            <p>Frontend Developer</p>
            <p>MERN Stack Developer </p>
          </div>
        </div>

        {/* Developer 5 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 5" />
          <div className={"Card-details"}>
            <h3>Dhanush</h3>
            <p>Backend Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="Developer-profileDetails">
          <p>Connect with us on social media!</p>
          <div className="Card-btn">
            <IconButton target={"_blank"} href={"https://www.facebook.com/saisriram.sriram.7"} title={"sriram"}>
              <Facebook />
            </IconButton>
            <IconButton target={"_blank"} href={"https://twitter.com/"} title={"sriram"}>
              <Twitter />
            </IconButton>
            <IconButton target={"_blank"} href={"https://www.linkedin.com/in/pottennagari-sai-sriram-reddy-2aa83b242/"} title={"sriram"}>
              <LinkedIn />
            </IconButton>
            <IconButton target={"_blank"} href={"https://www.instagram.com/saisriram_reddy/"} title={"saisriram_reddy"}>
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;