import React, { useEffect, useState } from "react";
import "./FinancialCard.scss";
import BArr from "../asset/bx-down-arrow-alt.svg";
import UArr from "../asset/bx-up-arrow-alt.svg";

const PlayerCard = (props) => {
  const { data } = props;

  const [value, setValue] = useState(data.RTPrice);
  const [ValueStatus, setValueStatus] = useState(data.RTPrice);
  // console.log("PlayerCard ~ data.RTPrice", data.RTPrice);

  useEffect(() => {
    const prevValue = window.localStorage.getItem("RTvalue");

    if (prevValue > data.RTPrice) {
      console.log("negative");
      setValueStatus(false);
    }
    if (prevValue < data.RTPrice) {
      console.log("positive");
      setValueStatus(true);
    }

    setValue(data.RTPrice);

    window.localStorage.setItem("RTvalue", data.RTPrice);

    return setValue();
  }, [setValue, value, data]);

  return (
    <React.Fragment>
      <div className="card-head">
        <div className="card-head__company">
          <div className="card-head__company--symbol">{data.Symbol}</div>
          <div className="card-head__company--name">{`${data.CName}.`}</div>
        </div>

        <div className="card-head__change">
          <div className="card-head__change--rtprice">{data.RTPrice}</div>
          <div
            className="card-head__change-price"
            style={ValueStatus ? { color: "#27AE60" } : { color: "#eb5757" }}
          >
            <div className="card-head__change-price--value">
              {data.ChangeValue &&
                `${ValueStatus ? "" : "-"}${Math.abs(
                  Math.round(data.ChangeValue * 100) / 100
                )}`}
            </div>
            <div className="card-head__change-price--pers">
              {data.ChangePercentage &&
                `(${Math.round(data.ChangePercentage * 1000) / 1000}%)`}
            </div>
            <div className="card-head__change-price--arr">
              {data.ChangePercentage && (
                <img src={ValueStatus ? UArr : BArr} alt="BArr" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-seprator"></div>

      <div className="card-body">
        <div className="card-body__lft">
          <div className="card-body__lft-stats">
            <div className="card-body__lft-stats--name">Mkt Cap</div>
            <div className="card-body__lft-stats--value">{data.MCap}</div>
          </div>

          <div className="card-body__lft-stats">
            <div className="card-body__lft-stats--name">P/E Ratio</div>
            <div className="card-body__lft-stats--value">{data.PERatio}</div>
          </div>

          <div className="card-body__lft-stats">
            <div className="card-body__lft-stats--name">Avg. volume</div>
            <div className="card-body__lft-stats--value">{data.ATVolume}</div>
          </div>
        </div>

        <div className="card-body__seprator"></div>
        <div className="card-body__seprator-abs"></div>

        <div className="card-body__rgt">
          <div className="card-body__rgt-stats">
            <div className="card-body__rgt-stats--name">Prev Close</div>
            <div className="card-body__rgt-stats--value">{data.PClose}</div>
          </div>

          <div className="card-body__rgt-stats">
            <div className="card-body__rgt-stats--name">52-wk high</div>
            <div className="card-body__rgt-stats--value">{data.W52High}</div>
          </div>

          <div className="card-body__rgt-stats">
            <div className="card-body__rgt-stats--name">52-wk Low</div>
            <div className="card-body__rgt-stats--value">{data.W52Low}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayerCard;

/* <div className="player__name">{name}</div>
<div className="player__skills">{skills}</div>
<div className="player__price">$ {price}</div>
<div className="player__CCode"> {CCode}</div>
<div className="player__VsCCode"> {VsCCode}</div>
<div className="player__MDate"> {MDate}</div> */
