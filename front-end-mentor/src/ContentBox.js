import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import AppCalculation from "./AppCalculation";

const ContentBox = (props) => {
  return (
    <>
      <div id="app-header">
        <Typography.Title>Simple, traffic-based pricing</Typography.Title>
        <div className="sub-title">
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
      </div>
      <AppCalculation />
    </>
  );
};

export default ContentBox;
