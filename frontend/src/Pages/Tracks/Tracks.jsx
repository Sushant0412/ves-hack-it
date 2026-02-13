import React, { useState, useEffect, useRef } from "react";
import "./Tracks.css";
import ParticleEffect from "./ParticleEffect";
import grid from "../../assets/grid.svg";
import rays from "../../assets/rays.svg";
import software from "../../assets/software.jpg";
import hardware from "../../assets/hardware.jpg";

const Tracks = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const wrapperRef = useRef();

  useEffect(() => {
    const updateDimensions = () => {
      const rect = wrapperRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    window.addEventListener("load", updateDimensions);
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("load", updateDimensions);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className=" wrapper min-h-screen bg-transparent z-0 relative overflow-hidden flex justify-center items-center py-2 pt-40"
        id="tracks"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="top-gradient absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-t from-transparent to-gray-950 z-40"></div>
        <div className="w-full max-w-5xl p-4 h-auto py-20">
          {/* title */}
          <h2
            className="text-7xl font-black workbench-font text-center text-white mb-5"
            style={{
              textShadow: "-5px 0 12px green, 5px 0 12px blue",
            }}
          >
            Tracks
          </h2>

          {/* both the tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="raysBg bg-sky-900 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] border-gray-700 border overflow-hidden">
              <div
                className="w-full h-[300px]"
                style={{
                  background: `url(${software})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className="p-6 pl-8">
                <h2 className="text-5xl font-bold text-center text-sky-50  mb-7">
                  Software
                </h2>
                <p className="text-3xl text-sky-100 font-medium">
                  Build innovative, sustainable software solutions.
                </p>
               <ol className="ml-5 text-2xl text-sky-100 font-medium list-decimal text-left mt-4 space-y-3">
                  <li><strong>AI & Predictive Analytics</strong></li>
                  <li><strong>Assistive Technology & Computer Vision</strong></li>
                  <li><strong>Cybersecurity & NLP</strong></li>
                </ol>
              </div>
            </div>
            <div className="raysBg bg-orange-800 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] border-gray-700 border overflow-hidden">
              <div
                className="w-full h-[300px]"
                style={{
                  background: `url(${hardware})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className="p-6 pl-8">
                <h2 className="text-5xl font-bold text-center text-orange-50 mb-7">
                  Hardware
                </h2>
                <p className="text-3xl text-orange-100 font-medium">
                  Create impactful hardware prototypes for a better world.
                </p>
                <ol className="ml-5 text-2xl text-orange-100 font-medium list-decimal text-left mt-4 space-y-3">
                  <li><strong>Immersive Heritage & IoT</strong></li>
                  <li><strong>Smart Healthcare & Wearables</strong></li>
                  <li><strong>Sports Tech & Performance Tracking</strong></li>
                  <li><strong>EdTech & Interactive Toys</strong></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 px-4">
        {/* Problem Statements */}
        <h2
          className="text-7xl font-black workbench-font text-center text-white mb-10"
          style={{
            textShadow: "-5px 0 12px green, 5px 0 12px blue",
          }}
        >
          Problem Statements
        </h2>

        {/* Software Problem Statements */}
        <div className="mb-12 flex justify-center">
          <div className="bg-sky-900 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 border-gray-700 border p-8 max-w-4xl w-full">
            <h3
              className="text-2xl lg:text-5xl font-bold text-center text-blue-200 mb-6 glow-effect"
              style={{
                textShadow: "0 0 15px blue, 0 0 25px lightblue",
              }}
            >
              Software
            </h3>
            <ol className="ml-5 text-md lg:text-lg text-sky-100 font-medium list-none space-y-4">
              <li className="hover:glow-hover">
                <strong>SW-01: Public Places / Transport Crowding Predictor:</strong> Develop an AI-based software system that predicts crowd density in public places or transport systems using historical and real-time data.
              </li>
              <li className="hover:glow-hover">
                <strong>SW-02: Real-Time Signboard Reader for Visually Impaired:</strong> Build an AI-powered application that detects, reads, and converts signboard text into speech in real time for visually impaired users.
              </li>
              <li className="hover:glow-hover">
                <strong>SW-03: Personal Protection System against Social Media Scams and Digital Fraud:</strong> Design an intelligent cyber-safety application that detects social media scams, “digital arrest” fraud patterns, and suspicious messages using AI/NLP techniques.
              </li>
            </ol>
          </div>
        </div>

        {/* Hardware Problem Statements */}
        <div className="flex justify-center">
          <div className="bg-orange-800 backdrop-blur-sm rounded-lg shadow-xl shadow-gray-900 border-gray-700 border p-8 max-w-4xl w-full">
            <h3
              className="text-2xl lg:text-5xl font-bold text-center text-orange-200 mb-6 glow-effect"
              style={{
                textShadow: "0 0 15px orange, 0 0 25px gold",
              }}
            >
              Hardware
            </h3>
            <ol className="ml-5 text-md lg:text-lg text-orange-100 font-medium list-none space-y-4">
              <li className="hover:glow-hover">
                <strong>HW-01: Technology for Cultural Heritage:</strong> Build a hardware-based interactive system that helps preserve and experience cultural heritage through sensing, display, or immersive physical interfaces.
              </li>
              <li className="hover:glow-hover">
                <strong>HW-02: At-Home Healthcare Assistant:</strong> Develop a sensor-based home healthcare device that monitors vital parameters and assists patients with daily health management.
              </li>
              <li className="hover:glow-hover">
                <strong>HW-03: Technology for Sports:</strong> Design a wearable or embedded hardware system that tracks athlete performance metrics and provides real-time feedback.
              </li>
              <li className="hover:glow-hover">
                <strong>HW-04: Play, Learn, Grow Toys – The Indian Way:</strong> Create an interactive electronic toy using sensors and microcontrollers that teaches concepts through Indian stories, games, or traditions.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
