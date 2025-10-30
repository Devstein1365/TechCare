import React from "react";
import BirthIcon from "../../assets/BirthIcon.svg";
import FemaleIcon from "../../assets/FemaleIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import InsuranceIcon from "../../assets/InsuranceIcon.svg";

const PatientProfile = ({ patient }) => {
  if (!patient) {
    return <div>No patient data available</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      {/* Patient Header */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-[200px] h-[200px] rounded-full object-cover mb-6"
        />
        <h2 className="text-2xl font-extrabold text-[#072635]">
          {patient.name}
        </h2>
      </div>

      {/* Patient Details */}
      <div className="space-y-6">
        {/* Date of Birth */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center flex-shrink-0">
            <img src={BirthIcon} alt="" className="w-[18px] h-[18px]" />
          </div>
          <div>
            <p className="text-sm text-[#072635] font-medium mb-1">
              Date Of Birth
            </p>
            <p className="text-sm font-bold text-[#072635]">
              {formatDate(patient.date_of_birth)}
            </p>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center flex-shrink-0">
            <img src={FemaleIcon} alt="" className="w-[18px] h-[18px]" />
          </div>
          <div>
            <p className="text-sm text-[#072635] font-medium mb-1">Gender</p>
            <p className="text-sm font-bold text-[#072635]">{patient.gender}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center flex-shrink-0">
            <img src={PhoneIcon} alt="" className="w-[18px] h-[18px]" />
          </div>
          <div>
            <p className="text-sm text-[#072635] font-medium mb-1">
              Contact Info.
            </p>
            <p className="text-sm font-bold text-[#072635]">
              {patient.phone_number}
            </p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center flex-shrink-0">
            <img src={PhoneIcon} alt="" className="w-[18px] h-[18px]" />
          </div>
          <div>
            <p className="text-sm text-[#072635] font-medium mb-1">
              Emergency Contacts
            </p>
            <p className="text-sm font-bold text-[#072635]">
              {patient.emergency_contact}
            </p>
          </div>
        </div>

        {/* Insurance Provider */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center flex-shrink-0">
            <img src={InsuranceIcon} alt="" className="w-[18px] h-[18px]" />
          </div>
          <div>
            <p className="text-sm text-[#072635] font-medium mb-1">
              Insurance Provider
            </p>
            <p className="text-sm font-bold text-[#072635]">
              {patient.insurance_type}
            </p>
          </div>
        </div>
      </div>

      {/* Show All Information Button */}
      <button className="w-full mt-10 bg-[#01F0FF] hover:bg-[#00d4e6] transition text-[#072635] font-bold py-3 rounded-[41px]">
        Show All Information
      </button>
    </div>
  );
};

export default PatientProfile;
