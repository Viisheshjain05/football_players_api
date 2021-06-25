import React, { useEffect, useState } from "react";
import PlayerCard from "../components/PlayerCard.jsx";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [PlayerData, setPlayerData] = useState([]);
  const [SearchPlayer, setSearchPlayer] = useState("");

  // const searchPlayer = useRef();

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

  // useEffect(() => {
  // const alfa = searchPlayer.current.value;
  // }, [searchPlayer]);

  // console.log(SearchPlayer);

  return (
    <>
      <div className="player__search-bar--head">
        <input
          type="text"
          // ref={searchPlayer}
          name=""
          id=""
          onChange={(e) => setSearchPlayer(e.target.value)}
          placeholder="Search Players"
        />
      </div>

      <div className="player__list--head">
        {PlayerData.map((el, ind) => {
          if (SearchPlayer === "") {
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
          }
          if (SearchPlayer !== "") {
            if (
              el.PFName.toLowerCase().indexOf(SearchPlayer.toLowerCase()) !== -1
            ) {
              return (
                <React.Fragment key={el.id}>
                  <PlayerCard
                    player_img={el.id}
                    name={el.PFName}
                    skills={el.SkillDesc}
                    price={el.Value}
                    matches={el.UpComingMatches}
                    // highlight={el.PFName.toLowerCase().indexOf(
                    // SearchPlayer.toLowerCase()
                    // )}
                  />
                </React.Fragment>
              );
            }
          }
          return "";
        })}
      </div>
    </>
  );
};

export default App;
