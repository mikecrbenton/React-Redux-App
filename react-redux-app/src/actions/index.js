import axios from "axios";

export const getDog = () => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
         console.log(res);
        dispatch({ type: "NEW_DOG", payload: res.data.message });
      })
      .catch(err => console.log("ERROR:", err));
  };
};
