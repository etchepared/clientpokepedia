import axios from "axios";

export const setPokemons = (payload) => (dispatch) => {
  axios
    .get(
      "http://localhost:3001/pokemons" ||
        "https://henrypokepedia.herokuapp.com/pokemons"
    )
    .then((res) =>
      dispatch({
        type: "SET_POKEMONS",
        payload: res.data,
      })
    );
};

export const resetPokemons = (clean) => {
  return {
    type: "RESET_POKEMONS",
    payload: clean,
  };
};

export const sortPokemons = (order) => {
  return {
    type: "SORT_POKEMONS",
    payload: order,
  };
};

export function catchPokemon(search) {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/pokemons?name=${search}` ||
          `https://henrypokepedia.herokuapp.com/pokemons?name=${search}`
      )
      .then((res) => {
        dispatch({
          type: "CATCH_POKEMON",
          payload: [res.data],
        });
      })
      .catch((error) => {
        dispatch({
          type: "CATCH_POKEMON",
          payload: "Pokemon not found",
        });
      });
  };
}

export const filterByType = (typeSelected) => {
  return {
    type: "FILTER_BY_TYPE",
    payload: typeSelected.toLowerCase(),
  };
};

export const filterCreated = (selected) => {
  return {
    type: "FILTER_CREATED",
    payload: selected.toLowerCase(),
  };
};

export const selectedPokemon = (selected) => (dispatch) => {
  if (selected < 0) {
    dispatch({
      type: "POKEMON_DETAIL",
      payload: "Buscando pokemon...",
    });
    return;
  }
  axios
    .get(
      `http://localhost:3001/pokemons/${selected}` ||
        `https://henrypokepedia.herokuapp.com/pokemons/${selected}`
    )
    .then((res) =>
      dispatch({
        type: "POKEMON_DETAIL",
        payload: res.data,
      })
    )
    .catch((error) => {
      console.log(error, "Pokemon not found");
    });
};

export const cleanDetail = (payload) => {
  return {
    type: "CLEAN_DETAIL",
    payload: payload,
  };
};

export const setTypes = (payload) => (dispatch) => {
  axios
    .get(
      "http://localhost:3001/types" ||
        "https://henrypokepedia.herokuapp.com/types"
    )
    .then((res) =>
      dispatch({
        type: "POKEMON_TYPES",
        payload: res.data,
      })
    );
};
