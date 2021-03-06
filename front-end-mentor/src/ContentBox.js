import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import patternCircles from "./images/patternCircles.svg";
import AppCalculation from "./AppCalculation";
import AppFooter from "./AppFooter";

const ContentBox = (props) => {
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
        <hr
          style={{
            borderTop: "1px solid hsl(230, 100%, 99%)",
            marginLeft: "-20px",
            marginRight: "-20px",
          }}
        />
        <AppFooter />
      </div>
    </div>
  );
};

export default ContentBox;
