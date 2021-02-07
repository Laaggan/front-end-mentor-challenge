import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Typography, Space, List, Slider, Switch } from "antd";
import { CheckOutlined, CheckCircleTwoTone } from "@ant-design/icons";

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  // const sliderValue = 30;
  var data = ["Unlimited websites", "100% data ownership", "Email reports"];

  const handleSlider = (e) => {
    setSliderValue(e);
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
            <Slider
              style={{ width: 500 }}
              defaultValue={sliderValue}
              onChange={handleSlider}
            />
          </div>
          <div>
            <Space>
              Monthly Billing
              <Switch />
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
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
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
