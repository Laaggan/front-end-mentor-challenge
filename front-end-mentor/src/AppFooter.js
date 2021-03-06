import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import CustomSlider from "./CustomSlider.js";
import iconCheck from "./images/iconCheck.svg";

function AppCalculation() {
  var data = ["Unlimited websites", "100% data ownership", "Email reports"];
  return (
    <div id="app-footer">
      <div id="list-container">
        <List
          split={false}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <img src={iconCheck}></img> {item}
            </List.Item>
          )}
        />
      </div>
      <div id="button-container">
        <button id="start-my-trial">Start my trial</button>
      </div>
    </div>
  );
}

export default AppCalculation;
