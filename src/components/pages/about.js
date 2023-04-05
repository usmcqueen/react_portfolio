import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/andréa1.png";
export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          height: "800px",
          width: "650px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        My name is Andrea. I am currently a student, learning to be a Full Stack
        Developer. This has been an amazing journey so far and I cannot wait to
        see where this will take me. The most important thing I have learned so
        far is that perseverance while learning these new skills has been
        challenging and yet truly rewarding. I have big goals set for myself and
        I have been checking them off one by one. Maybe in the future I could be
        a good fit for your team?
      </div>
    </div>
  );
}
