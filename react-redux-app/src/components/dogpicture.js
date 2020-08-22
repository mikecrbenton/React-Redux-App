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
   border: 10px solid tan;
   box-shadow: 0 0 5px black;
   width: 50%;
   margin: 2em auto;
   padding: 2em;

   .dog-container{
      height: 400px;
      weight: 400px;
      
      img{
         object-fit: cover;
         max-width: 300px;
         max-height: 400px;
         border: 10px solid tan;
         box-shadow: 0 0 5px black;
      }

   }
   button{
      border: 3px solid tan;
      box-shadow: 0 0 2px black;
      padding: .5em 1em;
      background-color: #FFF;
      color: tan;
      font-weight: 900;
      margin-top: 1em;
   }

`;