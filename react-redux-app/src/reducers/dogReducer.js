const initialState = {
   loading: false,
   dog: "https://dog.ceo/api/breeds/image/random"
 };
 
 export const dogReducer = (state = initialState, action) => {
   switch (action.type) {
     case "LOADING":
       return { ...state, loading: true };
     case "NEW_DOG":
       return { ...state, loading: false, dog: action.payload };
     default:
       return state;
   }
 };
 