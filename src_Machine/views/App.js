import React, { useEffect, useState } from "react";
import PlayerCard from "../components/PlayerCard.jsx";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [PlayerData, setPlayerData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.npoint.io/20c1afef1661881ddc9c",
    })
      .then((res) => {
        const List = res.data.playerList;
        const playerUpdatedList = [];

        List.forEach((el) => {
          playerUpdatedList.push({
            id: el.Id,
            PFName: el.PFName,
            TName: el.TName,
            SkillDesc: el.SkillDesc,
            Value: el.Value,
            UpComingMatches: {
              CCode: el.UpComingMatchesList[0].CCode,
              VsCCode: el.UpComingMatchesList[0].VsCCode,
              MDate: el.UpComingMatchesList[0].MDate,
            },
          });
        });

        setPlayerData(playerUpdatedList);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(PlayerData);

  return (
    <>
      <div className="player__search-bar--head">
        <input type="text" name="" id="" placeholder="Search Players" />
      </div>

      <div className="player__list--head">
        {PlayerData.map((el, ind) => {
          return (
            <React.Fragment key={el.id}>
              <PlayerCard
                player_img={el.id}
                name={el.PFName}
                skills={el.SkillDesc}
                price={el.Value}
                matches={el.UpComingMatches}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className="">hii</div>
    </>
  );
};

export default App;
