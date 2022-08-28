import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// styles
import CreateYours from "../MyImages/create.png";
import pokepedia from "../MyImages/HenryPokepedia.png";
import "./navbar.css";
// components
import ToHome from "./ToHome/ToHome";
import Start from "./Start/Start";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="containerNavbarA">
      {location.pathname === "/" ? (
        <nav className="navbar">
          <div className="toHomeNav">
            <Start />
          </div>
          <div className="pokepediaNav">
            <img id="pokepedia" src={pokepedia} alt="Pokepedia" />
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="toHomeNav">
            <ToHome />
          </div>
          <div className="pokepediaNav">
            <img id="pokepedia" src={pokepedia} alt="Pokepedia" />
          </div>
          {location.pathname === "/home" && (
            <div className="createNav">
              <div className="containerCreate">
                <Link to="/create">
                  <img
                    id="create"
                    src={CreateYours}
                    alt="Create your Pokémon"
                  />
                </Link>
              </div>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
