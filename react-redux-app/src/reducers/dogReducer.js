// 3 STANDARD VALUES:  ERROR(STRING), LOADING(BOOLEAN), SUCCESS
import{ DOG_ERROR, NEW_DOG_SUCCESS, DOG_LOADING } from '../actions/index'



const initialState = {
   loading: false,
   dog: {},
   error: ''
 };
 
 
 export const dogReducer = (state = initialState, action) => {

   switch (action.type) {

     case DOG_LOADING :
       return { ...state, loading: true };

     case NEW_DOG_SUCCESS :
       return { 
          ...state, 
          loading: false, // DON'T FORGET TO RESET
          dog: action.payload 
       };
     
     case DOG_ERROR : 
       return {
          ...state,
           loading: false,
           error: action.payload
         }

     default:
       return state;
   }

 };
 