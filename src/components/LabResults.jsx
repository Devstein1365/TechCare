import React from "react";
import { BsDownload } from "react-icons/bs";
import { MdDownloadForOffline, MdOutlineFileDownload } from "react-icons/md";

const LabResults = ({ labResults }) => {
  if (!labResults || labResults.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl p-5 mt-8">
      <h2 className="text-2xl font-extrabold text-[#072635] mb-5">
        Lab Results
      </h2>

      {/* Results List */}
      <div className="space-y-3 max-h-[295px] overflow-y-auto custom-scrollbar">
        {labResults.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-[#F6F7F8] rounded-lg transition cursor-pointer"
          >
            <p className="text-sm text-[#072635]">{result}</p>
            <MdOutlineFileDownload className="text-[20px] font-bold" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
