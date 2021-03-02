import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-main-container">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
        <h1>WELCOME TO UI CREATOR</h1>
        <h2>Learn how to design a simple web wire frame</h2>
      </div>
      <div className="home-body">
        <a href="/select">
          <button className="start-btn">Click to start Designing</button>
        </a>
      </div>
    </div>
  );
}
