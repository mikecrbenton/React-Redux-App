import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";
import styled from 'styled-components';


function DogPicture( props ) {

  useEffect( () => {
     props.getDog();
  },[getDog]) 

  return (
    <MainContainer>
      <div className="dog-container">
         {props.loading ? ( // <-- implicit return
         <h1>Loading</h1>
         ) : (    // <-- implicit return
         <img src={props.dog} />
         )}
      </div>

      <button onClick={() => {props.getDog()}}>
        Get Dog Picture
      </button>

    </MainContainer>
  );
}

// ***KEY CONCEPT***  
// WHEN USING MULTIPLE REDUCERS - YOU NEED TO 
// DECONSTRUCT DOWN A LEVEL TO THE REDUCER NAME
// ( THE NAME YOU DEFINED IN reducers/index.js)
 const mapStateToProps = (state) => {
   return{
    loading: state.dogReducer.loading,
    dog: state.dogReducer.dog
   }
 }

 // COULD ALSO CREATE mapDispatchToProps = {
 //                      someName: getDog
 //                      anotherFunc : doSomething
 //                   }

export default connect( mapStateToProps, { getDog } )(DogPicture);

const MainContainer = styled.div`
   box-shadow: 0 0 7px black;
   border-radius: 10px;
   background-color: #e1d89f ;
   max-width: 500px;
   min-width: 500px;
   margin: 2em auto;
   text-align: center;

   .dog-container{
      height: 400px;
      weight: 400px;
      
      img{
         object-fit: cover;
         max-width: 300px;
         max-height: 350px;
         border-radius: 5px;
         box-shadow: 0 0 5px black;
         margin: 2em;
      }

   }
   button{
      border: 2px solid #2c061f;
      box-shadow: 0 0 3px black;
      border-radius: 5px;
      padding: .5em 1em;
      background-color: #FFF;
      color: #2c061f;
      font-weight: 900;
      margin: 1em;
   }

`;


{/* <MainContainer>
<div className="dog-container">
   {props.loading ? (  //
   <h1>Loading</h1>
   ) : (
   <img src={props.dog} />
   )}
</div>

<button onClick={() => {props.getDog()}}>
  Get Dog Picture
</button>

</MainContainer> */}