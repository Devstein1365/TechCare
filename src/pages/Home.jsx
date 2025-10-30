import React, { useEffect, useState } from "react";
import { fetchPatientData } from "../services/api";
import Navbar from "../components/UI/Navbar";
import PatientsList from "../components/UI/PatientsList";
import DiagnosisHistory from "../components/DiagnosisHistory";
import DiagnosticList from "../components/DiagnosticList";
import PatientProfile from "../components/PatientProfile";
import LabResults from "../components/LabResults";

const Home = () => {
  // State to hold the patient data from API
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patient data when component first loads
  useEffect(() => {
    const loadPatientData = async () => {
      try {
        setLoading(true);
        const data = await fetchPatientData();
        setPatientData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load patient data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, []);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#01F0FF] mx-auto mb-4"></div>
          <p className="text-[#072635] font-medium">Loading patient data...</p>
        </div>
      </div>
    );
  }

  // Show error message if API call fails
  if (error) {
    return (
      <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md text-center">
          <p className="text-red-600 font-bold mb-2">Error Loading Data</p>
          <p className="text-[#072635]">{error}</p>
        </div>
      </div>
    );
  }

  if (!patientData) {
    return (
      <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md text-center">
          <p className="text-[#072635] font-bold">No patient data found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F7F8] px-[18px] py-[23px]">
      {/* Navbar */}
      <Navbar />

      {/* Main dashboard layout - 3 columns */}
      <div className="grid grid-cols-[370px_1fr_370px] gap-8">
        {/* Left sidebar - shows all patients */}
        <div>
          <PatientsList />
        </div>

        {/* Center section - charts and diagnosis info */}
        <div>
          <DiagnosisHistory diagnosisHistory={patientData.diagnosis_history} />
          <DiagnosticList diagnosticList={patientData.diagnostic_list} />
        </div>

        {/* Right sidebar - patient details and lab results */}
        <div>
          <PatientProfile patient={patientData} />
          <LabResults labResults={patientData.lab_results} />
        </div>
      </div>
    </div>
  );
};

export default Home;
