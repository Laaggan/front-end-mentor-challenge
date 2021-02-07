import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [discount, setDiscount] = useState(0);
  
  var data = ["Unlimited websites", "100% data ownership", "Email reports"];

  const calcDisccount = (discount, price) => {
    return price - price * discount
  }

  const handleSlider = (e) => {
    setSliderValue(
      calcDisccount(discount, e.target.value)
    );
  };

  const handleSwitch = (e) => {
    if (discount == 0) {
      setDiscount(0.25);
      setSliderValue(
        sliderValue * 0.75
      );
    } else {
      setSliderValue(
        sliderValue / 0.75
      );
      setDiscount(0);
    }
  };

  return (
    <div className="background">
      <div className="App">
        {/* <header className="App-header">
      </header> */}
        <body>
          <div>
            <Typography.Title>Simple, traffic-based pricing</Typography.Title>
            <div className="sub-title">
              <p>Sign-up for our 30-day trial. No credit card required.</p>
            </div>
          </div>
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
          <div id="slider-container">
            {/* <Slider
              style={{ width: 500 }}
              defaultValue={sliderValue}
              onChange={handleSlider}
            /> */}
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                onChange={handleSlider}
              ></input>
            </div>
          </div>
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
        </body>

        <footer>
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Your Name Here</a>.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
