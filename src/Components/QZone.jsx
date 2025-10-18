import React from "react";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import play from "../assets/playground.png";

const QZone = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Q Zone</h2>
      <div>
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
