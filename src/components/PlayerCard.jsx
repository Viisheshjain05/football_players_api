import React from "react";
import "./PlayerCard.scss";

const PlayerCard = (props) => {
  const { player_img, name, skills, price, matches,  } = props;
  const { CCode, VsCCode, MDate } = matches;

  // const TextHighlight = (text) => {
  //   if (highlight !== "") {
  //     var pattern = new RegExp("(" + text + ")", "gi");
  //     // let updatedText = "";
  //     var new_text = text.replace(
  //       pattern,
  //       <span class="highlight">{text}</span>
  //     );
  //     console.log("TextHighlight ~ new_text", new_text);
  //     return new_text;
  //   }
  // };

  return (
    <React.Fragment key={player_img}>
      <div className="player">
        <div className="player__image">
          <img src={`../player-images/${player_img}.jpg`} alt="" />
        </div>

        <div className="player__stats">
          <div className="player__stats--name">Name</div>
          <div className="player__stats--seprator"></div>
          <div className="player__stats--value">
            { name}
          </div>
        </div>

        <div className="player__stats">
          <div className="player__stats--name">skills</div>
          <div className="player__stats--value">{skills}</div>
        </div>

        <div className="player__stats">
          <div className="player__stats--name">price</div>
          <div className="player__stats--value">${price}</div>
        </div>

        <div className="player__stats">
          <div className="player__stats--name">CCode</div>
          <div className="player__stats--value">{CCode}</div>
        </div>

        <div className="player__stats">
          <div className="player__stats--name">VsCCode</div>
          <div className="player__stats--value">{VsCCode}</div>
        </div>

        <div className="player__stats">
          <div className="player__stats--name">MDate</div>
          <div className="player__stats--value">{MDate}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayerCard;
