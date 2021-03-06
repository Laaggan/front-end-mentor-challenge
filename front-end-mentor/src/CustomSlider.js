import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";

const CustomSlider = (props) => {
  return (
    <div id="slider-container">
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          onChange={props.handleSlider}
        ></input>
      </div>
    </div>
  );
};

export default CustomSlider;
