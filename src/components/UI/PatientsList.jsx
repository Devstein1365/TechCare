import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all patients when component loads
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const encodedAuth = btoa(`${USERNAME}:${PASSWORD}`);

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Authorization: `Basic ${encodedAuth}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPatients(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching patients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 h-[1054px] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-extrabold text-[#072635]">Patients</h2>
        <IoIosSearch className="w-[18px] h-[18px] cursor-pointer text-[#072635]" />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#01F0FF] mx-auto mb-2"></div>
            <p className="text-sm text-[#707070]">Loading patients...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-red-600">Error: {error}</p>
        </div>
      )}

      {/* List of all patients */}
      {!loading && !error && (
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="space-y-4">
            {patients.map((patient, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition ${
                  patient.name === "Jessica Taylor"
                    ? "bg-[#D8FCF7]" // Highlight Jessica Taylor
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={patient.profile_picture}
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
                <MdMoreHoriz className="w-[18px] h-[18px] cursor-pointer text-[#072635]" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientsList;
