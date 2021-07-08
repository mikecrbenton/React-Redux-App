import axios from "axios";

// *** KEY CONCEPT **
// IF YOU ARE USING MORE THAN ONE REDUCER, YOU NEED TO GIVE
// UNIQUE NAMES TO YOUR ACTIONS FOR EACH REDUCER, OR YOUR
// DISPATCH WILL SEND OUT TO -ALL- REDUCERS

// *** KEY CONCEPT **
// NAME TO A VARIABLE SO THAT ERRORS WILL BE READABLE
// AND NOT HARD TO FIND
export const DOG_ERROR = "DOG_ERROR"
export const NEW_DOG_SUCCESS = "NEW_DOG_SUCCESS"
export const DOG_LOADING = "DOG_LOADING"

export const getDog = () => {

  return dispatch => {

    dispatch({ type: DOG_LOADING });
    
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then( (res) => {
         console.log(res);
        dispatch({ type: NEW_DOG_SUCCESS, payload: res.data.message });
      })
      .catch( (err) => {
         console.log("ERROR:", err)
         dispatch({type: DOG_ERROR, payload: err.message})
      });
  };

};

