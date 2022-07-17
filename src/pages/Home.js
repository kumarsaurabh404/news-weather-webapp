import React from "react";
import Nav from "./nav";
import "../App.css";

const Home = () => {
  return (
    <div className="parent">
      <div className="logout-div">
        <a href="./Home" id="logo">
          {" "}
          Home
        </a>
        <a href="./main" id="logo">
          {" "}
          Utility App
        </a>
        <button className="logout" class="btn btn-secondary">
          <a href="./"> Logout</a>
        </button>
      </div>
      <div className="App">
        <button type="button" class="btn btn-primary">
          <a href="./Apple">APPLE</a>
        </button>
        <button type="button" class="btn btn-success">
          <a href="./Tesla">TESLA</a>
        </button>
        <button type="button" class="btn btn-warning">
          <a href="./Bitcoin">BITCOIN</a>
        </button>

        <button type="button" class="btn btn-primary">
          <a href="./technology">TECHNOLOGY</a>
        </button>
        <button type="button" class="btn btn-primary">
          <a href="./hollywood">HOLLYWOOD</a>
        </button>


        <button type="button" class="btn btn-info">
          <a href="./android">ANDROID</a>
        </button>
        <button type="button" class="btn btn-warning">
          <a href="./automobile">AUTOMOBILE</a>
        </button>
        <button type="button" class="btn btn-primary">
          <a href="./movies">MOVIES</a>

        </button>



      </div>
    </div>
  );
};
export default Home;
