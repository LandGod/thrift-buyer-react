import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import "../../index.css";
import ToggleSwitch from "./index";

export default {
  component: ToggleSwitch,
  title: "ToggleSwitch",
  decorator: [(story: ReactNode) => <div style={{backgroundColor:'black', width:'100%', height:'100%'}} >{story}</div>],
  excludeStories: /.*Data$/,
};

export const ToggleSwitchData = {
  callback: action("Toggled postion"),
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
export const DefaultLeft = () => <ToggleSwitch {...ToggleSwitchData} startingPosition="left" />;
export const DefaultRight = () => <ToggleSwitch {...ToggleSwitchData} startingPosition="right" />;
