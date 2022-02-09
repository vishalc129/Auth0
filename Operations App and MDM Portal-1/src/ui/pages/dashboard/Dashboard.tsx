import React from "react";
import { Locale } from "../../../utils/localization";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">{Locale?.welcome_text}</header>
    </div>
  );
}
