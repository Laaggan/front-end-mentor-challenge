import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import CustomSlider from './CustomSlider.js';

function AppCalculation() {
  const [sliderValue, setSliderValue] = useState(50);
  const [discount, setDiscount] = useState(0);
  var path = process.env.PUBLIC_URL + "/images/favicon-32x32.png";
  var data = ["Unlimited websites", "100% data ownership", "Email reports"];

  const calcDisccount = (discount, price) => {
    debugger;
    return price - price * discount;
  };

  const handleSwitch = (e) => {
    debugger;
    if (discount == 0) {
      setDiscount(0.25);
      setSliderValue(sliderValue * 0.75);
    } else {
      setSliderValue(sliderValue / 0.75);
      setDiscount(0);
    }
  };

  const handleSlider = (e) => {
    setSliderValue(calcDisccount(discount, e.target.value))
  }

  return (
    <body>
      <div className="App">
        <div className="main-app">
          <div>
            <Space>
              <div className="sub-title" id="price">
                <Space>
                  100k Pageviews
                  <div className="money">{sliderValue}</div>$ /month
                </Space>
              </div>
            </Space>
          </div>
          <CustomSlider handleSlider={handleSlider}/>
          <div>
            <Space>
              Monthly Billing
              <Switch onChange={handleSwitch} />
              Yearly Billing
              <div className="discount-container">25% discount</div>
            </Space>
          </div>
          <div className="button-container">
            <Space>
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    {/* <Typography.Text><CheckOutlined twoToneColor="#52c41a" /></Typography.Text> {item} */}
                    <CheckCircleTwoTone twoToneColor="#52c41a" /> {item}
                  </List.Item>
                )}
              />
              <Button type="default">Start my trial</Button>
            </Space>
          </div>
        </div>
      </div>
    </body>
  );
}

export default AppCalculation;
