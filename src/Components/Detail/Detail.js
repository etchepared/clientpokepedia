import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, selectedPokemon } from "../../Actions/index.js";
import Loader from "../Loader/Loader";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pokemon = useSelector((store) => {
    return store.detail;
  });

  useEffect(() => {
    dispatch(selectedPokemon(id));
    return () => {
      dispatch(cleanDetail(["Aquí no hay nada"]));
    };
  }, [dispatch, id]);

  if (!pokemon.hp) {
    return (
      <div id="detailContainer" className="container">
        <div className="error">
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <div id="detailContainer" className="container">
      {pokemon.hp && (
        <div key={pokemon.id} id="detailcard" className="pokemon">
          <div>
            <h3>{pokemon.name}</h3>
            <div className="pokemonImage">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="mapTypes">
              {pokemon.types &&
                pokemon.types.map((t) => {
                  return <h4 key={pokemon.types.indexOf(t) + 1}>{t}</h4>;
                })}
            </div>
          </div>
          <div>
            <h5>Life: {pokemon.hp}</h5>
            <h5>Strength: {pokemon.strength}</h5>
            <h5>defense: {pokemon.defense}</h5>
            <h5>speed: {pokemon.speed}</h5>
            <h5>height: {pokemon.height}</h5>
            <h5>weight: {pokemon.weight}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
