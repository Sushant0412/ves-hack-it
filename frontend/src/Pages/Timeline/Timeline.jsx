// Timeline.js
import React, { useState, useEffect } from "react";
import "./Timeline.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("Hardware");

  const timelineData = {

    Hardware: [
       {
          date: "14th February",
          title: "Registration Opening and Release of Problem Statements on Unstop",
        },
        {
          date: "5th March",
          title: "Submission of PPT Deadline",
        },
        {
          date: "20th March",
          title: "List of Shortlisted Teams for Main Competition",
        },
        {
          date: "28th - 29th March",
          title: "Final Hackathon Round at VESIT",
        }
      // {
      //   date: "4th Jan - 20th Jan",
      //   title: "Registration and workshop selection",
      // }, 
      // {
      //   date: "15th Jan",
      //   title: "Problem statement release",
      // },
      // {
      //   date: "20th Jan - 22nd Jan",
      //   title:
      //     "Hardware Training and Mentoring Workshops.( ESP32/STM/RASPBERRY PI/FPGA)",
      // },
      // {
      //   date: "23rd Jan - 30th Jan",
      //   title: "Domain selection and component list sharing",
      // },
      // {
      //   date: "31st Jan",
      //   title: "Hardware Track Presentation Round.",
      // },
      // {
      //   date: "2nd Feb",
      //   title: "Shortlisted teams announcement",
      // },
      // {
      //   date: "10th Feb- 14th Feb",
      //   title: "Download ID card for entry",
      // },
      // {
      //   date: "15th - 16th Feb",
      //   title: "𝟭𝟱-𝟭𝟲𝘁𝗵 𝗙𝗲𝗯: Final Hackathon Round.",
      // },
    ],
    Software: [ 
        {
          date: "14th February",
          title: "Registration Opening and Release of Problem Statements on Unstop",
        },
        {
          date: "5th March",
          title: "Submission of PPT Deadline",
        },
        {
          date: "20th March",
          title: "List of Shortlisted Teams for Main Competition",
        },
        {
          date: "28th - 29th March",
          title: "Final Hackathon Round at VESIT",
        }
      // {
      //   date: "4th Jan - 20th Jan",
      //   title: "Registration and workshop selection",
      // },
      // {
      //   date: "15th Jan",
      //   title: "Release of problem statement",
      // },
      // {
      //   date: "21st Jan",
      //   title: "Software Track Presentation Submission.",
      // },
      // {
      //   date: "31st Jan",
      //   title: "PPT screening at VESIT, Chembur",
      // },
      // {
      //   date: "2nd Feb",
      //   title: "List of shortlisted teams for main competition",
      // },
      // {
      //   date: "15th - 16th Feb",
      //   title: "𝟭𝟱-𝟭𝟲𝘁𝗵 𝗙𝗲𝗯: Final Hackathon Round.",
      // },
    ],
    "On Day Schedule": [
      {
        date: "28th March 2026, 8:30 AM to 9:00 AM",
        title: "Reporting & Registration",
      },
      {
        date: "28th March 2026, 9:00 AM to 9:30 AM",
        title: "Table allotment and set up",
      },
      {
        date: "28th March 2026, 9:30 AM",
        title: "Inauguration in library",
      },
      {
        date: "28th March 2026, 9:45 AM",
        title: "Coding starts",
      },
      {
        date: "28th March 2026, 1:00 PM - 2:00 PM",
        title: "Lunch",
      },
      {
        date: "28th March 2026, 3:00 PM - 5:00 PM",
        title: "First judging round",
      },
      {
        date: "28th March 2026, 5:30 PM",
        title: "Tea and snack break",
      },
      {
        date: "28th March 2026, 8:30 PM - 9:30 PM",
        title: "Dinner",
      },
      {
        date: "28th March 2026, 12:00 AM - 1:00 AM",
        title: "Music",
      },
      {
        date: "29th March 2026, 7:00 AM",
        title: "Yoga",
      },
      {
        date: "29th March 2026, 11:00 AM to 1:00 PM",
        title: "Second Judging Round",
      },
      {
        date: "29th March 2026, 3:00 PM to 5:00 PM",
        title: "Power Judging (only for top 10 teams)",
      },
      {
        date: "29th March 2026, 6:00 PM",
        title: "Valedictory Function",
      }
    ],
  };

  return (
    <div
      className="bg-transparent z-0 min-h-screen w-screen overflow-hidden flex flex-col items-center py-12 px-4 sm:px-8"
      id="timeline"
      // style={{ backgroundColor: "#000816" }}
    >
      <h2
        className="text-7xl font-black workbench-font text-center text-white mb-5"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        Timeline
      </h2>
      {/* Category Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 text-xl">
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Hardware" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("Hardware")}
        >
          Hardware
        </button>
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Software" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("Software")}
        >
          Software
        </button>
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "On Day Schedule" ? "bg-green-700" : "bg-gray-700"
          }`}
          onClick={() => setSelectedCategory("On Day Schedule")}
        >
          On Day Schedule
        </button>
      </div>

      {/* Timeline */}
      <ul className="list-none relative w-full max-w-3xl mx-auto">
        {timelineData[selectedCategory].map((item, index) => (
          <li
            key={index}
            className={`relative mb-12 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white ${
              index % 2 === 0
                ? "ml-auto mr-0 sm:mr-auto sm:ml-0"
                : "mr-auto ml-0 sm:ml-auto sm:mr-0"
            } w-full sm:w-1/2`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            {/* Glowing Dot */}
            <div
              className="absolute top-0 w-4 h-4 rounded-full bg-green-400 transform -translate-y-2"
              style={{
                left: index % 2 === 0 ? "-1rem" : "auto",
                right: index % 2 !== 0 ? "-1rem" : "auto",
                boxShadow: "0 0 10px 4px rgba(0, 255, 100, 0.8)",
              }}
            />
            {/* Content */}
            <h3 className="text-sm font-light mb-2 tracking-widest text-green-400">
              {item.date}
            </h3>
            <h1 className="text-lg font-semibold mb-4 leading-snug">
              {item.title}
            </h1>
          </li>
        ))}

        {/* Middle Line */}
        <div className="absolute top-0 bottom-4 left-1/2 w-1 bg-gray-700 transform -translate-x-1/2 hidden sm:block glow-line"></div>

        {/* Bottom Circle */}
        <div className="absolute bottom-0 left-1/2 w-5 h-5 rounded-full bg-green-400 transform -translate-x-1/2 glow-dot hidden sm:block"></div>
      </ul>
    </div>
  );
};

export default Timeline;
