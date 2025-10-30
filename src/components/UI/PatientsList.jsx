import React from "react";
import searchIcon from "../../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import moreHorizIcon from "../../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

// Sample patient list data
const patients = [
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "/src/assets/Layer 8@2x.png",
  },
  {
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "/src/assets/Layer 1@2x.png",
  },
  {
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "/src/assets/Layer 2@2x.png",
  },
  {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "/src/assets/Layer 3@2x.png",
    active: true,
  },
  {
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: "/src/assets/Layer 4@2x.png",
  },
  {
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "/src/assets/Layer 12@2x.png",
  },
  {
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "/src/assets/Layer 6@2x.png",
  },
  {
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "/src/assets/Layer 7@2x.png",
  },
  {
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: "/src/assets/Layer 9@2x.png",
  },
  {
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: "/src/assets/Layer 10@2x.png",
  },
  {
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: "/src/assets/Layer 5@2x.png",
  },
  {
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: "/src/assets/Layer 2-1@2x.png",
  },
];

const PatientsList = () => {
  return (
    <div className="bg-white rounded-2xl p-5 h-[1054px] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-extrabold text-[#072635]">Patients</h2>
        <img
          src={searchIcon}
          alt="Search"
          className="w-[18px] h-[18px] cursor-pointer"
        />
      </div>

      {/* Patients List */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-4">
          {patients.map((patient, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition ${
                patient.active ? "bg-[#D8FCF7]" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-sm text-[#072635]">
                    {patient.name}
                  </p>
                  <p className="text-xs text-[#707070]">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
              </div>
              <img
                src={moreHorizIcon}
                alt="More"
                className="w-[18px] h-[18px] cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
