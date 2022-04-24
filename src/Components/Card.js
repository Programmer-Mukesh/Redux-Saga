import React from "react";
import "./Card.css"

const Card = ({user}) => {
  return (
    <div className="card">
      <div className="cardBody">
        <h5 className="cardTitle">{user.id}) {user.name}</h5>
        <h6 className="cardSubtitle">
          Company:  {user.company.name}
        </h6>
        <p className="cardText">Description:  {user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Card;
