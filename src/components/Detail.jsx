import React from "react";

const Detail = (props) => {
  return (
    <div className="Event">
      <img src={props.img} alt="image" />
      <h3>{props.name}</h3>
      <h4>{props.director}</h4>
      <a href={props.link} target="_blank">
        <button>{props.btn}</button>
      </a>
    </div>
  );
};

export default Detail;
