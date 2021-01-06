import React from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";
import styled from 'styled-components';


function DogPicture(props) {
  return (
    <MainContainer>
      <div className="dog-container">
         {props.loading ? (
         <h1>Loading</h1>
         ) : (
         <img src={props.dog} />
         )}
      </div>

      <button onClick={() => {props.getDog();}}>
        Get Dog Picture
      </button>

    </MainContainer>
  );
}

 const mapStateToProps = (state) => {
   return{
    loading: state.loading,
    dog: state.dog
   }
 }

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