import { useState, useRef } from "react";
import React from "react";

const softwarePrizeData = [
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Winner Trophy",
    rank: "gold",
    details: [{ text: "Rs.25,000" }],
    title: "Software Winner"
  },
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Winner Trophy",
    rank: "gold",
    details: [{ text: "Rs.25,000" }],
    title: "Software Winner"
  },
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Winner Trophy",
    rank: "gold",
    details: [{ text: "Rs.25,000" }],
    title: "Software Winner"
  },
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Special Winner Trophy",
    rank: "silver",
    details: [{ text: "Rs.25,000" }],
    title: "Judges' Special Winner"
  }
];
const hardwarePrizeData = [
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Winner Trophy",
    rank: "gold",
    details: [{ text: "Rs.25,000" }],
    title: "Hardware Winner"
  },
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Winner Trophy",
    rank: "gold",
    details: [{ text: "Rs.25,000" }],
    title: "Hardware Winner"
  },
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Winner Trophy",
    rank: "gold",
    details: [{ text: "Rs.25,000" }],
    title: "Hardware Winner"
  },
  {
    imgSrc: "https://img.icons8.com/emoji/96/000000/trophy-emoji.png",
    altText: "Special Winner Trophy",
    rank: "silver",
    details: [{ text: "Rs.25,000" }],
    title: "Judges' Special Winner"
  }
];

const PrizeCard = ({ imgSrc, altText, details, rank, title }) => {
  const [flipped, setFlipped] = useState(false); // State for tracking the card flip
  const cardRef = useRef(null);
  const handleOnClick = () => {
    setFlipped(!flipped);
    cardRef.current.style.transform = `rotateY(${
      flipped ? "180deg" : "0deg"
    }deg) rotateY(${flipped ? 180 : 0}deg)`;
  };
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // Mouse X position inside the card
    const y = e.clientY - rect.top; // Mouse Y position inside the card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20; // Tilt along X-axis
    const rotateY = ((x - centerX) / centerX) * 20; // Tilt along Y-axis

    card.style.transform = `rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0)"; // Reset the tilt
  };

  const handleFlip = () => {
    handleOnClick();
    // setFlipped(!flipped); // Toggle the flip state
  };

  return (
    <div
      className={`relative shadow-xl shadow-[#ffffff22] flex-none lg:flex-1 glow-${rank} gap-x-5 bg-[#ffffff22] backdrop-blur-sm p-6 flex flex-col items-center justify-between font-quicksand rounded-2xl  border  border-stone-600 transform-gpu w-[250px] sm:w-[280px] mb-12 transition-transform duration-700 ${
        flipped ? "rotate-y-180" : ""
      }`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1500px", // Adding perspective for the 3D flip effect
      }}
      id="prizes"
    >
      {/* Bottom Rounded Shape (Only semicircle) */}
      <div className="absolute top-0 w-full h-[176px] rounded-b-[120px] bg-gradient-to-t from-[#ffffff44] to-transparent rounded-t-xl shadow-xl"></div>
      {/* Bottom Rounded Shape */}
      {/* <div className="absolute top-12 w-full h-28 bg-gray-700 rounded-b-full"></div> */}
      <div className="z-10 flex flex-col items-center w-full">
        <h4 className={`text-xl font-bold text-center mb-4 ${rank === "silver" ? "text-amber-200" : "text-white"}`}>{title}</h4>
        <img
          src={imgSrc}
          alt={altText}
          className="w-24 h-24 mb-6"
          loading="lazy"
        />
        {/* Front side content */}
        <div
          className={`text-white text-sm space-y-2 pt-6 flex flex-col items-center ${
            flipped ? "hidden" : ""
          }`}
        >
          {details.map((detail, index) => (
            <p
              className={`font-medium text-3xl ${
                rank === "gold" ? "text-white" : rank === "silver" ? "text-gray-200" : "text-white"
              }`}
              style={{
                textShadow:
                  rank === "gold" ? "0 2px 12px" : rank === "silver" ? "0 2px 8px grey" : "0 2px 8px ",
              }}
              key={index}
            >
              {detail.text}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Prizes = () => {
  return (
    <div className="min-w-full flex flex-col    py-8">
      <h2
        className="text-7xl font-black workbench-font text-center text-white mb-5"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        Prizes
      </h2>
      <h3
        className="text-xl lg:text-5xl font-black workbench-font text-center text-white mb-16"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        💰 Prize Pool: Worth over{" "}
        <span
          className="text-5xl lg:text-5xl font-black workbench-font text-center text-white"
          style={{
            textShadow: "-5px 0 12px gold, 5px 0 12px red",
          }}
        >
          Rs.2,00,000!
        </span>
      </h3>
      <p className="text-3xl text-white font-extrabold text-center mt-4 mb-8">
        Software Track
      </p>
      <div className="flex flex-wrap gap-8 justify-center min-w-full flex-1 flex-grow px-4 max-w-7xl mx-auto">
        {softwarePrizeData.map((prize, index) => (
          <PrizeCard
            key={index}
            imgSrc={prize.imgSrc}
            altText={prize.altText}
            details={prize.details}
            rank={prize.rank}
            title={prize.title}
          />
        ))}
      </div>
      <p className="text-3xl text-white font-extrabold text-center mt-8 mb-8">
        Hardware Track
      </p>
      <div className="flex flex-wrap gap-8 justify-center min-w-full flex-1 flex-grow px-4 max-w-7xl mx-auto">
        {hardwarePrizeData.map((prize, index) => (
          <PrizeCard
            key={index}
            imgSrc={prize.imgSrc}
            altText={prize.altText}
            details={prize.details}
            rank={prize.rank}
            title={prize.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Prizes;
