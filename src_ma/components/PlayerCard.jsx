import React from "react";
import "./PlayerCard.scss";

const PlayerCard = (props) => {
  const { player_img, name, skills, price, matches } = props;
  const { CCode, VsCCode, MDate } = matches;
  //   console.log("PlayerCard ~ matches", matches);

  return (
    <React.Fragment key={player_img}>
      <div className="player">
        <div className="player__image">{player_img}</div>
        <div className="player__name">{name}</div>
        <div className="player__skills">{skills}</div>
        <div className="player__price">$ {price}</div>
        <div className="player__CCode"> {CCode}</div>
        <div className="player__VsCCode"> {VsCCode}</div>
        <div className="player__MDate"> {MDate}</div>
      </div>
    </React.Fragment>
  );
};

export default PlayerCard;
