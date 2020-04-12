import React from "react";
import App from "./components/App/App";
import BrowserUnsupported from "./components/BrowserUnsupported/BrowserUnsupported";
import DailyIframe from "@daily-co/daily-js";

export default function VideoContainer() {
  return DailyIframe.supportedBrowser().supported ? <App /> : <BrowserUnsupported />;
};
