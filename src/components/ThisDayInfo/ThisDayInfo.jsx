import React from "react";
import { ThisDayInfoWrapper, ImgWrapper } from "./styles";

const ThisDayInfo = () => {
  return (
    <ThisDayInfoWrapper>
      <div className="info-row">
        <ImgWrapper>
          <img src="./images/temperature.svg" alt="" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>20</p>
      </div>

      <div className="info-row">
        <ImgWrapper>
          <img src="./images/pressure.svg" alt="" />
        </ImgWrapper>
        <h2>Pressure</h2>
        <p>20</p>
      </div>

      <div className="info-row">
        <ImgWrapper>
          <img src="./images/humidity.svg" alt="" />
        </ImgWrapper>
        <h2>Humidity</h2>
        <p>20</p>
      </div>

      <div className="info-row">
        <ImgWrapper>
          <img src="./images/wind.svg" alt="" />
        </ImgWrapper>
        <h2>Wind</h2>
        <p>20</p>
      </div>
    </ThisDayInfoWrapper>
  );
};

export default ThisDayInfo;
