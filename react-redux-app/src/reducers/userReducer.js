// this only exists as an example for combining 
// multiple reducers - not functioning in the app

const initialState = { 
   username: "mike",
   id: 1,
   email: "mikebenton@gmail.com",

}

export const userReducer = (state = initialState, action) => {
   switch(action.type){
      default:
         return state
   }
}