import { useState } from "react"
import Confetti from "react-confetti"

const softwareTeams = {
  "Winner (SW1)": [
    { team: "Team_Technexis", lead: "Arnav Shirwadkar", college: "Lokmanya Tilak COE" }
  ],
  "Winner (SW2)": [
    { team: "SayKnowMore", lead: "Chaitanya Medidar", college: "VESIT" }
  ],
  "Winner (SW3)": [
    { team: "Sentinel", lead: "Krish Pinto", college: "Fr. C. Rodrigues Institute of Technology" }
  ],
  "Judges' Special Winner": [
    { team: "Code & Chaos", lead: "Tanishka Donde", college: "Vishwakarma Institute of Technology, Pune" }
  ]
}

const hardwareTeams = {
  "Winner (HW2)": [
    { team: "MedByte", lead: "Pratyush Tripathi", college: "Veermata Jijabai Technological Institute" }
  ],
  "Winner (HW3)": [
    { team: "DeeDos", lead: "Samarth Kale", college: "Fr. C. Rodrigues Institute of Technology" }
  ],
  "Winner (HW4)": [
    { team: "Xspark", lead: "Jui Adke", college: "VESIT" }
  ],
  "Judges' Special Winner": [
    { team: "Karare Kurkure", lead: "Raj Shukla", college: "VESIT" }
  ]
}

const RoundOneResults = () => {
  const [selectedCategory, setSelectedCategory] = useState("Software")

  return (
    <div className="flex flex-col relative w-full overflow-hidden min-h-[60vh] py-10">
      <div className="absolute inset-0 pointer-events-none z-50">
        <Confetti 
          width={typeof window !== 'undefined' ? window.innerWidth : 1200}
          height={typeof window !== 'undefined' ? 2000 : 1000}
          recycle={false}
          numberOfPieces={500}
          gravity={0.15}
        />
      </div>
      <h2
        className="text-7xl font-black workbench-font text-center text-white mb-10 z-10"
        style={{
          textShadow: "-5px 0 12px green, 5px 0 12px blue",
        }}
      >
        Winners
      </h2>
      <div className="mb-8 flex flex-wrap justify-center gap-4 text-xl z-10">
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Hardware" ? "bg-green-700" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setSelectedCategory("Hardware")}
        >
          Hardware
        </button>
        <button
          className={`px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 ${
            selectedCategory === "Software" ? "bg-green-700" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setSelectedCategory("Software")}
        >
          Software
        </button>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 mx-5 md:mx-auto gap-6 lg:grid-cols-4 z-10 max-w-7xl`}>
        {Object.entries(selectedCategory === "Hardware" ? hardwareTeams : softwareTeams).map(([ps, teams]) => (
          <div
            key={ps}
            className={`${
              selectedCategory === "Hardware" ? "bg-orange-800" : "bg-sky-900"
            } ${ps === "Judges' Special Winner" ? "border-amber-400 border-2" : "border-gray-700 border"} backdrop-blur-sm rounded-lg shadow-lg min-h-48 shadow-gray-900/50 p-6 w-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center text-center`}
          >
            <h2 className={`text-2xl font-bold mb-4 border-b border-white/20 pb-2 w-full ${ps.includes("Judges'") ? "text-amber-400" : "text-white"}`}>
              {ps}
            </h2>
            <ul className="space-y-4 flex-1 flex flex-col justify-center">
              {teams.map((item, key) => (
                <li key={key} className="text-white transition-all duration-200">
                  <div className="text-2xl font-black tracking-wide mb-2 text-green-300 drop-shadow-md">{item.team}</div>
                  <div className="text-md font-semibold text-gray-100 mb-1">Lead: {item.lead}</div>
                  <div className="text-sm text-gray-300 italic">{item.college}</div>
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


