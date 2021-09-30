import React from "react";
import "./HomePage.css";
import ReactPlayer from "react-player";
import { aboutPage } from "../../constants/routes";

export default function HomePage() {
  return (
    <div className="main">
      <ReactPlayer
        url="https://cdn.videvo.net/videvo_files/video/free/2017-03/large_watermarked/170307_Particles_17_1080p_preview.mp4"
        playing="true"
        loop="true"
        className="myVideo"
      />
      <div className="greetings">
        Hello. Hanged for you{" "}
        <a href={aboutPage} className="toAboutPage">
          Vahe
        </a>
      </div>
    </div>
  );
}
