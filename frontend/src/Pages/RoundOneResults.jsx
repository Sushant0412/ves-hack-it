"use client"

import { useState } from "react"

const softwareTeams = {
  "SW-01": [
    { team: "Byte Alchemy", lead: "Shubhada Deshmukh" },
    { team: "Code Monk", lead: "Soham Patil" },
    { team: "AltX_OverDrive", lead: "Nachiket Kale" },
    { team: "Runtime Terror", lead: "Saurabh Gangurde" },
    { team: "SentriX", lead: "Dhruti Mehta" },
    { team: "Green Tech", lead: "Rohit Bhagwat" },
    { team: "Hackonauts", lead: "Vedant Gawali" },
    { team: "CodeBreakers", lead: "Jidnesh Patil" },
    { team: "InnovateX", lead: "Asmi Katke" },
    { team: "Team_Technexis", lead: "Arnav Shirwadkar" }
  ],
  "SW-02": [
    { team: "SayKnowMore", lead: "Chaitanya Ananda Medidar" },
    { team: "SurveyCorps", lead: "Gaurav More" },
    { team: "Code Titans", lead: "Suyash Patil" },
    { team: "Code Watchers", lead: "Saumitra Gurav" },
    { team: "DAWNIX", lead: "Suyash Sonawane" },
    { team: "GDuo", lead: "Rushil Patil" },
    { team: "JSHS", lead: "Hemant Jawale" },
    { team: "Gradient Descent", lead: "Dhruv Shetty" },
    { team: "SYSCODE", lead: "Sakshi Bhansali" },
    { team: "TeenTigadas", lead: "Meet Phulwani" }
  ],
  "SW-03": [
    { team: "Chaat Masala", lead: "Amarnath" },
    { team: "Scam Shield", lead: "Yogaant Naidu" },
    { team: "Code & Chaos", lead: "Tanishka Donde" },
    { team: "Tandoori Techies", lead: "Purjeet Shahu" },
    { team: "InnoVerse", lead: "Vedant Shelar" },
    { team: "Sentinel", lead: "Krish Pinto" },
    { team: "Developers", lead: "Drishti Gupta" },
    { team: "ARKAA!", lead: "Allan Fernandes" },
    { team: "Hackoverflow", lead: "Soham Chaudhari" },
    { team: "Akatsuki", lead: "Kushith Shetty" }
  ]
}


const hardwareTeams = {
  "HW-02": [
    { team: "Team Rocket", lead: "Yash Jadhav" },
    { team: "MedByte", lead: "Pratyush Tripathi"},
    { team: "Runtime Error", lead: "Vansh Lalwani" },
    { team: "IoTians", lead: "Sakib Khan" },
    { team: "CGPAglus", lead: "Ishaan Vaidya" },
    { team: "ElectroBoom", lead: "Kalpesh Kisan Naik" }
  ],
  "HW-03": [
    { team: "Team Vanguard", lead: "Faizan Rabbani" },
    { team: "DeeDos", lead: "Samarth Kale" },
    { team: "Hacker Logs", lead: "Umed Indulkar" },
    { team: "HACK ERROR 404", lead: "Aditya Basantani" },
    { team: "BeRRY", lead: "Reyansh Bhavesh Sakariya" }
  ],
  "HW-04": [
    { team: "Xspark", lead: "Jui Adke" },
    { team: "Hackhive", lead: "Apoorva Ghyare" },
    { team: "karare kurkure", lead: "Raj Shukla" },
    { team: "ShockSquad", lead: "Shubham Kandalgaonkar" }
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
              {teams.map((item, key) => (
                <li key={key} className="text-white transition-all duration-200 mb-3">
                  <div className="text-xl font-semibold tracking-wide">{item.team}</div>
                  <div className="text-sm text-gray-300">Lead: {item.lead}</div>
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

