import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import CustomSlider from "./CustomSlider.js";

function AppCalculation() {
  const [sliderValue, setSliderValue] = useState(14);
  const [discount, setDiscount] = useState(0);
  // var path = process.env.PUBLIC_URL + "/images/favicon-32x32.png";
  
  // TODO: You should really not have to pad with the last value!
  const costs = [8, 12, 16, 24, 36, 1000];
  const pageViews = {"8":"10K", "12":"50K", "16":"100K", "24":"500K", "36":"1M", "1000:":undefined};

  /* 
  10K pageviews / $8 per month
  50K pageviews / $12 per month
  100K pageviews / $16 per month
  500k pageviews / $24 per month
  1M pageviews / $36 per month 
  */

  useEffect(() => {
    const res = findClosestValue(14, costs)
    setSliderValue(res);
  }, [])

  const findClosestValue = (val, list) => {
    for (let i = 0; i < list.length; i++){
      if (list[i] > val){
        return list[i - 1]
      }
    }
  }

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
    const newVal = findClosestValue(e.target.value, costs)
    setSliderValue(calcDisccount(discount, newVal));
  };

  return (
    <>
      <div>
        <Space>
          <div className="sub-title" id="price">
            <Space>
              {pageViews[sliderValue]} Pageviews
              <div className="money">{sliderValue}</div>$ /month
            </Space>
          </div>
        </Space>
      </div>
      <CustomSlider handleSlider={handleSlider} sliderValue={sliderValue} />
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
