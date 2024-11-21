import React from "react";
import "./WaifuCard.css";

const WaifuCard = ({ name, anime, image, rating }) => {
  return (
    <div className="waifu-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Anime :</strong> {anime}</p>
      <p className="rating">Note : {rating}/10</p>
    </div>
  );
};

export default WaifuCard;
