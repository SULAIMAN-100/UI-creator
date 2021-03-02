import React from "react";
import "./PatternsPage.css";
function PatternsPage() {
  return (
    <div>
      <div class="container-fluid">
        <div class="background">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </nav>
        <div class="logo">
          <span>S</span>
        </div>
        <section class="header-content">
          <h1>Select a pattern</h1>
          <h2>Welcome to your begginig to UI design.</h2>
          <h3> Start creating your simple wire frames.</h3>
        </section>
        <div className="pattern-container">
          <a href="single-pattern">
            <div className="pattern">A</div>
          </a>
          <div className="pattern">B</div>
          <div className="pattern">C</div>
          <div className="pattern">D</div>
        </div>
      </header>
    </div>
  );
}

export default PatternsPage;
