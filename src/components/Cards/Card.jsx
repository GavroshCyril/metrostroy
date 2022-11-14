import React from "react";
import petro from "../../Assets/Images/petrowscina.jpg";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={petro} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">Карточка метроплитена</p>
        <a href="/" className="btn btn-outline-success">
          Go
        </a>
      </div>
    </div>
  );
};

export default Card;
