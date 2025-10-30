import React from "react";
import TestLogo from "../../assets/TestLogo.svg";
import homeIcon from "../../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import groupIcon from "../../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import calendarIcon from "../../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import chatIcon from "../../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import creditCardIcon from "../../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import settingsIcon from "../../assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import moreVertIcon from "../../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import doctorImage from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";

const Navbar = () => {
  return (
    <nav className="bg-white rounded-[70px] px-8 py-3 flex items-center justify-between shadow-sm mb-8">
      {/* Logo */}
      <div className="flex items-center">
        <img src={TestLogo} alt="Tech Care" className="h-12" />
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-10">
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <img src={homeIcon} alt="" className="w-[17px] h-[17px]" />
          <span className="font-bold text-sm">Overview</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-[#01F0FF] px-4 py-2 rounded-[41px] text-[#072635] transition"
        >
          <img src={groupIcon} alt="" className="w-[17px] h-[17px]" />
          <span className="font-bold text-sm">Patients</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <img src={calendarIcon} alt="" className="w-[17px] h-[17px]" />
          <span className="font-bold text-sm">Schedule</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <img src={chatIcon} alt="" className="w-[17px] h-[17px]" />
          <span className="font-bold text-sm">Message</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <img src={creditCardIcon} alt="" className="w-[17px] h-[17px]" />
          <span className="font-bold text-sm">Transactions</span>
        </a>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-3">
        <img
          src={doctorImage}
          alt="Dr. Jose Simmons"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div className="border-r border-[#EDEDED] pr-3">
          <p className="text-sm font-bold text-[#072635]">Dr. Jose Simmons</p>
          <p className="text-xs text-[#707070]">General Practitioner</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={settingsIcon}
            alt="Settings"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            src={moreVertIcon}
            alt="More"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
