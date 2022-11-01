import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieJson from "../public/workingAnimation.json";

export default function Animation() {
  return (
    <Player
      autoplay={true}
      loop={true}
      controls={true}
      src={lottieJson}
      style={{ height: "600px", width: "700px" }}
    ></Player>
  );
}
