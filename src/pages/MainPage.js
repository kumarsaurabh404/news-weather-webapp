import React from "react";
import Nav from "./nav";
import "../App.css";

const MainPage = () => {
  return (
    <div className="parent">
      <div className="logout-div">
        <a href="#" id="logo">
          {" "}
          Utility App
        </a>

        <button className="logout" class="btn btn-secondary">
          <a href="/"> Logout</a>
        </button>
      </div>
      <div className="App">
        <button type="button" class="btn btn-primary">
          <a href="./Home">News</a>
        </button>
        <button type="button" class="btn btn-primary">
          <a href="./Weather">Weather</a>
        </button>

        <button type="button" class="btn btn-primary">
          <a href="./Jobs">Jobs Portal</a>
        </button>

        <button type="button" class="btn btn-primary">
          <a href="./Youtube">Watch</a>
        </button>

      </div>
    </div>
  );
};
export default MainPage;
