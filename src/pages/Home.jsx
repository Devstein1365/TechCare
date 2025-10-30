import React, { useEffect, useState } from 'react';
import { fetchPatientData } from '../services/api';
import Navbar from '../components/UI/Navbar';
import PatientsList from '../components/UI/PatientsList';
import DiagnosisHistory from '../components/DiagnosisHistory';
import DiagnosticList from '../components/DiagnosticList';
import PatientProfile from '../components/PatientProfile';
import LabResults from '../components/LabResults';

const Home = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatientData = async () => {
      try {
        setLoading(true);
        const data = await fetchPatientData();
        setPatientData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Failed to load patient data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, []);

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

      {/* Main Content Grid */}
      <div className="grid grid-cols-[370px_1fr_370px] gap-8">
        {/* Left Column - Patients List */}
        <div>
          <PatientsList />
        </div>

        {/* Middle Column - Diagnosis History & Diagnostic List */}
        <div>
          <DiagnosisHistory diagnosisHistory={patientData.diagnosis_history} />
          <DiagnosticList diagnosticList={patientData.diagnostic_list} />
        </div>

        {/* Right Column - Patient Profile & Lab Results */}
        <div>
          <PatientProfile patient={patientData} />
          <LabResults labResults={patientData.lab_results} />
        </div>
      </div>
    </div>
  );
};

export default Home;
