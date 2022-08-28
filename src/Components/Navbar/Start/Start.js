//import React, { useEffect } from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { setPokemons, setTypes } from "../../../Actions";
import "./start.css";

const Start = () => {
  return (
    <div className="containerToHome">
      <nav>
        <div className="homeButton">
          <Link to="/home">
            <div className="startbutton">
              <div className="cerrada" />
              <span className="homeSpan">Start your adventure here!</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Start;
