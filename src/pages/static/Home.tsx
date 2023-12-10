import React from "react";
import "./../../assets/CSS/wave.css";
import Hero from "../../components/Hero";
import Wave from "../../components/Wave";
import GameLogo from "../../components/GameLogo";
import PuzzleHouseLogo from "../../assets/gameLogo/puzzle-house-logo.png";
import FlappyBirdLogo from "../../assets/gameLogo/flappy-bird-logo.png";
import BrickBreakerLogo from "../../assets/gameLogo/brick-breaker-logo.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-800">
        <Hero />
        <Wave />
        <div className="container mx-auto py-8 px-4 gap-16 flex justify-center flex-wrap">
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
            game="Brick Breaker"
            img={BrickBreakerLogo}
            url="/brick-breaker"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
