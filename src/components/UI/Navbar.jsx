import React from "react";
import TestLogo from "../../assets/TestLogo.png";
import doctorImage from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import { GoCalendar, GoHome } from "react-icons/go";
import { MdOutlineMoreVert, MdOutlinePeopleAlt } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { SlCreditCard } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-white rounded-full w-full flex items-center justify-between px-[32px] py-[12px] mb-[18px]">
      {/* Logo */}
      <div className="flex items-center">
        <img src={TestLogo} alt="Tech Care" className="w-[210px] h-[48px]" />
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-[40px]">
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <GoHome />
          <span className="font-bold text-[14px]">Overview</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-[#01F0FF] px-4 py-2 rounded-[41px] text-[#072635] transition"
        >
          <MdOutlinePeopleAlt />
          <span className="font-bold text-[14px]">Patients</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <GoCalendar />
          <span className="font-bold text-[14px]">Schedule</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <FiMessageSquare />
          <span className="font-bold text-[14px]">Message</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-[#072635] hover:opacity-70 transition"
        >
          <SlCreditCard />
          <span className="font-bold text-[14px]">Transactions</span>
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
          <p className="text-[14px] font-bold text-[#072635]">Dr. Jose Simmons</p>
          <p className="text-[14px] text-[#707070]">General Practitioner</p>
        </div>
        <div className="flex items-center gap-2">
          <IoSettingsOutline />
          <MdOutlineMoreVert />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
