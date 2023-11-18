import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/CSS/wave.css";
import Hero from "../../components/Hero";
import Wave from "../../components/Wave";
import PuzzleHouseLogo from "../../assets/gameLogo/puzzle-house-logo.png";
import FlappyBirdLogo from "../../assets/gameLogo/flappy-bird-logo.png";
import GameLogo from "../../components/GameLogo";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-[#1a1a1a]">
        <Hero />
        <Wave />
        <div className="container mx-auto py-8 px-4 gap-16 flex justify-center flex-wrap">
          <GameLogo
            game="Puzzle House"
            img={PuzzleHouseLogo}
            url="/puzzle-house"
          />
          <GameLogo
            game="Flappy Bird"
            img={FlappyBirdLogo}
            url="/flappy-bird"
          />
          <GameLogo
            game="Puzzle House"
            img={PuzzleHouseLogo}
            url="/puzzle-house"
          />

          <GameLogo
            game="Puzzle House"
            img={PuzzleHouseLogo}
            url="/puzzle-house"
          />
          <GameLogo
            game="Puzzle House"
            img={PuzzleHouseLogo}
            url="/puzzle-house"
          />
          <GameLogo
            game="Puzzle House"
            img={PuzzleHouseLogo}
            url="/puzzle-house"
          />
          <GameLogo
            game="Puzzle House"
            img={PuzzleHouseLogo}
            url="/puzzle-house"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
