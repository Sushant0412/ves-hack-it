"use client"

import { useState } from "react"

const softwareTeams = {
  "SW-01": [
    "Byte Alchemy",
    "Code Monk",
    "AltX_OverDrive",
    "Runtime Terror",
    "SentriX",
    "Green Tech",
    "Hackonauts",
    "CodeBreakers",
    "InnovateX",
    "Team_Technexis"
  ],
  "SW-02": [
    "SayKnowMore",
    "SurveyCorps",
    "Code Titans",
    "Code Watchers",
    "DAWNIX",
    "GDuo",
    "JSHS",
    "Gradient Descent",
    "SYSCODE",
    "TeenTigadas"
  ],
  "SW-03": [
    "Chaat Masala",
    "Scam Shield",
    "Code & Chaos",
    "Tandoori Techies",
    "InnoVerse",
    "Sentinel",
    "Developers",
    "ARKAA!",
    "Hackoverflow",
    "Akatsuki"
  ]
}

const hardwareTeams = {
  "HW-01": [
    "Innovation Insurgents"
  ],
  "HW-02": [
    "Team Rocket",
    "MedByte",
    "Runtime Error",
    "IoTians",
    "CGPAglus",
    "ElectroBoom"
  ],
  "HW-03": [
    "Team Vanguard",
    "DeeDos",
    "Hacker Logs",
    "HACK ERROR 404"
  ],
  "HW-04": [
    "Xspark",
    "Hackhive",
    "karare kurkure",
    "ShockSquad"
  ]
}

const RoundOneResults = () => {
  const [selectedCategory, setSelectedCategory] = useState("Software")

  return (
    <div className="flex flex-col">
      <h2
        className="text-7xl font-black workbench-font text-center text-white mb-10"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        Round 1 Results
      </h2>
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
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 mx-5 md:mx-auto gap-6 ${selectedCategory === "Hardware" ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {Object.entries(selectedCategory === "Hardware" ? hardwareTeams : softwareTeams).map(([ps, teams]) => (
          <div
            key={ps}
            className={`${
              selectedCategory === "Hardware" ? "bg-orange-800" : "bg-sky-900"
            } backdrop-blur-sm rounded-lg shadow-lg min-h-48 shadow-gray-900/50 border-gray-700 border p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-102`}
          >
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-white/20 pb-2">{ps}</h2>
            <ul className="space-y-2">
              {teams.map((team, key) => (
                <li key={key} className="text-white font-light hover:font-medium transition-all duration-200">
                  {team}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoundOneResults

