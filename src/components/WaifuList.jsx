import React from "react";
import WaifuCard from "./WaifuCard";
import "./WaifuList.css";

const WaifuList = () => {
  const waifus = [
    { name: "Rem", anime: "Re:Zero", image: "assets/waifu/rem.jpeg", rating: 9 },
    { name: "Zero Two", anime: "Darling in the Franxx", image: "assets/waifu/zerotwo.jpeg", rating: 10 },
    { name: "Hinata Hyuga", anime: "Naruto", image: "assets/waifu/hinata.jpeg", rating: 7 },
    { name: "EsDeath", anime: "Akame ga kill", image: "assets/waifu/akame.jpeg", rating: 100 },
    { name: "Delta", anime: "Eminence in shadow", image: "assets/waifu/delta.jpeg", rating: 9 },
    { name: "Nami", anime: "One piece", image: "assets/waifu/nami.jpeg", rating: 100000000000000 },
    { name: "Mai", anime: "Bunny Girl Senpai", image: "assets/waifu/mai.jpeg", rating: 1000 },
  ];

  return (
    <div className="waifu-container">
      {waifus.map((waifu, index) => (
        <WaifuCard
          key={index}
          name={waifu.name}
          anime={waifu.anime}
          image={waifu.image}
          rating={waifu.rating}
        />
      ))}
    </div>
  );
};

export default WaifuList;
