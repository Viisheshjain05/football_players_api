import React, { useState } from "react";
import FinancialCard from "../components/FinancialCard.jsx";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [CardData, setCardData] = useState([]);

  const fetchData = (el) => {
    axios({
      method: "GET",
      url: `https://sandbox.iexapis.com/stable/stock/${
        el ? el : "first"
      }/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`,
    })
      .then((res) => {
        const List = res.data;
        // console.log(".then ~ List", List);
        // const playerUpdatedList = [];

        setCardData({
          CName: List.companyName,
          Symbol: List.symbol,
          RTPrice: List.iexRealtimePrice,
          ChangeValue: List.change,
          ChangePercentage: List.changePercent,
          MCap: List.marketCap,
          PERatio: List.peRatio,
          ATVolume: List.avgTotalVolume,
          PClose: List.previousClose,
          W52High: List.week52High,
          W52Low: List.week52Low,
        });
      })
      .catch((err) => setCardData("error"));
  };

  console.log("CardData", CardData);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Stock Ticker"
          onChange={(e) => fetchData(e.target.value)}
        />
        {/* <button className="search-bar__button">search</button> */}
      </div>
      {CardData.CName && (
        <div className="card__section--head">
          <div className="card">
            <React.Fragment>
              <FinancialCard data={CardData} />
            </React.Fragment>
          </div>
        </div>
      )}

      {CardData.length === 0 && (
        <>
          <div className="error__start"> Search stock by ticker symbol.</div>
        </>
      )}
      {CardData === "error" && (
        <>
          <div className="error__start"> Invalid ticker symbol. </div>
        </>


      )}
    </>
  );
};

export default App;
