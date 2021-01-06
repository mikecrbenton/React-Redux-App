
const initialState = {
   loading: false,
   dog: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_478.jpg"
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
 