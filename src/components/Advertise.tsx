import React, { useState, useEffect } from "react";
import Horizontal from "./../assets/img/advertise/horizontal.png";
import Vertical from "./../assets/img/advertise/vertical.png";
const Advertise: React.FC = () => {
  const [adsPopUp, setAdsPopUp] = useState([true, true, true]);

  const handleClose = (index: number) => {
    setAdsPopUp((prevAds) =>
      prevAds.map((ad, i) => (i === index ? false : ad))
    );
  };

  useEffect(() => {
    const rerunAds = setInterval(() => {
      setAdsPopUp([true, true, true]);
    }, 30000);

    return () => clearInterval(rerunAds);
  }, []);

  const advertisementConfig = [
    {
      image: Horizontal,
      position: "bottom-0 w-screen",
      size: "max-w-lg",
      imgSize: "max-h-[10vw]",
    },
    {
      image: Vertical,
      position: "right-0 h-screen",
      size: "w-24 max-w-[10vw]",
    },
    { image: Vertical, position: "left-0 h-screen", size: "w-24 max-w-[10vw]" },
  ];

  return (
    <>
      {advertisementConfig.map((ad, index) => {
        return (
          adsPopUp[index] && (
            <div
              key={index}
              className={`fixed ${ad.position} z-20 flex items-center justify-center`}
            >
              <div className={`${ad.size} relative`}>
                <button
                  onClick={() => handleClose(index)}
                  className="absolute cursor-pointer hover:bg-slate-300 border border-black bg-white text-black w-5 h-5 text-xs text-center"
                >
                  X
                </button>
                <img
                  className={ad.imgSize && ad.imgSize}
                  src={ad.image}
                  alt=""
                />
              </div>
            </div>
          )
        );
      })}
    </>
  );
};

export default Advertise;
