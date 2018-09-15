import React from "react";
import "./pups.css";


const PupCard = props => (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick = {() => props.trackScore(props.id)} />
    </div>

  </div>




)


export default PupCard;