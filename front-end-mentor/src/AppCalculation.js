import "./App.css";
import React, { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import CustomSlider from "./CustomSlider.js";

function AppCalculation() {
  const [sliderValue, setSliderValue] = useState(50);
  const [discount, setDiscount] = useState(0);
  // var path = process.env.PUBLIC_URL + "/images/favicon-32x32.png";

  /* 
  10K pageviews / $8 per month
  50K pageviews / $12 per month
  100K pageviews / $16 per month
  500k pageviews / $24 per month
  1M pageviews / $36 per month 
  */

  const calcDisccount = (discount, price) => {
    return price - price * discount;
  };

  const handleSwitch = (e) => {
    if (discount == 0) {
      setDiscount(0.25);
      setSliderValue(sliderValue * 0.75);
    } else {
      setSliderValue(sliderValue / 0.75);
      setDiscount(0);
    }
  };

  const handleSlider = (e) => {
    setSliderValue(calcDisccount(discount, e.target.value));
  };

  return (
    <>
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
      <CustomSlider handleSlider={handleSlider} />
      <div>
        <Space>
          Monthly Billing
          <Switch onChange={handleSwitch} />
          Yearly Billing
          <div className="discount-container">25% discount</div>
        </Space>
      </div>
    </>
  );
}

export default AppCalculation;
