import React from "react";
import { Link } from "react-router-dom";
import "./../assets/CSS/game-card-overlay.css";

type GameLogoProps = {
  game: string;
  img: string;
  url: string;
};

const GameLogo: React.FC<GameLogoProps> = ({ game, img, url }) => {
  return (
    <Link to={url}>
      <div className="card w-52 h-52 rounded-xl overflow-hidden drop-shadow-[0px_0px_10px_#8b83ff]">
        <div className="overlay absolute rounded-xl">
          <div className="h-32 max-w-[12rem] break-all text-2xl pt-6 flex items-center px-4">
            {game}
          </div>
          <div className="h-20 flex items-center pb-3">
            <span className="animate-bounce py-1 px-2 rounded border hover:px-6 transition-all">
              Play Now!
            </span>
          </div>
        </div>
        <img src={img} alt="Game Logo" className="rounded-xl object-contain" />
      </div>
    </Link>
  );
};

export default GameLogo;
