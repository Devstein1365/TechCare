import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GiFemale, GiMale } from "react-icons/gi";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlinePhone, MdPhone } from "react-icons/md";

const PatientProfile = ({ patient }) => {
  if (!patient) {
    return <div>No patient data available</div>;
  }

  // Convert the date to a readable format like "January 1, 1990"
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
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <CiCalendar />
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
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            {patient.gender === "Female" ? <GiFemale /> : <GiMale />}
          </div>
          <div>
            <p className="text-sm text-[#072635] font-medium mb-1">Gender</p>
            <p className="text-sm font-bold text-[#072635]">{patient.gender}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <MdOutlinePhone />
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
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <MdOutlinePhone />
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
          <div className="w-10 h-10 rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <LuShieldCheck />
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
      <button className="w-full mt-10 bg-[#01F0D0] hover:bg-[#00d4e6] transition text-[#072635] font-bold py-3 rounded-[41px]">
        Show All Information
      </button>
    </div>
  );
};

export default PatientProfile;
