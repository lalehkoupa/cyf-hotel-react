import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="tourist-card">
      {props.citiesName.map((city, index) => {
        return (
          <div className="card" key={index}>
            <img src={city.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h3 className="card-title">{city.name}</h3>
              <p>{city.summary}</p>
              <a href={city.website} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
