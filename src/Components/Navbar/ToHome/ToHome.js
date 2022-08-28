import React from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { setPokemons, setTypes } from "../../../Actions";
import Home from "../../MyImages/Home.png";
import "./toHome.css";

const ToHome = () => {
  return (
    <div className="containerToHome">
      <nav>
        <div className="homeButton">
          <Link to="/home">
            <img className="home" src={Home} alt="Home" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ToHome;
