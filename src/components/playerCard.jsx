import React from "react";

const PlayerCard = (props) => {
  const { player_img ,  } = props
      return (
    <>
      <div  className="player-card--head" ></div>
      <div  className="player__image" ></div>
    </>
  );
};

export default PlayerCard;
