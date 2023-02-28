import React from "react";
import Detail from "./Detail";

const Card = () => {
  return (
    <div className="Card">
      <div className="container">
        <div className="movie-card">
          <Detail
            img="./img/Jesus.png"
            name="Target"
            director="Popularity: 70%"
            link="https://www.target.com/"
            btn="Detials"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Bear.png"
            name="Costco"
            director="Popularity: 70%"
            link="https://www.costco.com/"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Magic.png"
            name="Dollar Tree"
            director="Popularity: 67%"
            link="https://www.dollartree.com/"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Happy.png"
            name="Big Lots"
            director="Popularity: 65%"
            link="https://www.biglots.com/"
            btn="Details"
          />
        </div>
      </div>
      <div className="container">
        <div className="movie-card">
          <Detail
            img="./img/80.png"
            name="Macy's"
            director="Popularity: 63%"
            link="https://www.macys.com/"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Miss.png"
            name="Sam's Club"
            director="Popularity: 63%"
            link="https://www.samsclub.com/"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Women.png"
            name="J.C. Penny"
            director="Popularity: 61%"
            link="https://www.jcpenny.com/"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/Cat.png"
            name="Kohl's"
            director="Popularity: 61%"
            link="https://www.kolhls.com/"
            btn="Details"
          />
        </div>
      </div>
      <div className="container">
        <div className="movie-card">
          <Detail
            img="./img/Age.png"
            name="Marshalls"
            director="Popularity: 61%"
            link="https://www.marshalls.com/"
            btn="Details"
          />
        </div>
        <div className="movie-card">
          <Detail
            img="./img/World.png"
            name="T.J Maxx"
            director="Popularity: 59%"
            link="https://www.tjmaxx.com/"
            btn="Details"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
