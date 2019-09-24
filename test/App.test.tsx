import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "../src/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the heading", () => {
  const result = shallow(<App />).contains(<p>Welcome to </p>);
  expect(result).toBeTruthy();
});
