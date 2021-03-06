import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import patternCircles from "./images/patternCircles.svg"
import AppCalculation from "./AppCalculation";
import AppFooter from "./AppFooter";

const ContentBox = (props) => {
    debugger;
    return (
    <div id="content-box">
        <div id="app-header">
          {/* <img src={patternCircles}></img> */}
          <Typography.Title>Simple, traffic-based pricing</Typography.Title>
          <div className="sub-title">
            <p>Sign-up for our 30-day trial. No credit card required.</p>
          </div>
        </div>
        <div id="app-calculation">
        <AppCalculation />
        <AppFooter />
        </div>
    </div>
  );
};

export default ContentBox;
