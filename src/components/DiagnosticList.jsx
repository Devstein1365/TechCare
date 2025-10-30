import React from "react";

const DiagnosticList = ({ diagnosticList }) => {
  if (!diagnosticList || diagnosticList.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl p-5 mt-8">
      <h2 className="text-2xl font-extrabold text-[#072635] mb-10">
        Diagnostic List
      </h2>

      {/* Table */}
      <div className="rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F6F7F8]">
            <tr>
              <th className="text-left text-sm font-bold text-[#072635] py-3 px-5 rounded-tl-2xl">
                Problem/Diagnosis
              </th>
              <th className="text-left text-sm font-bold text-[#072635] py-3 px-5">
                Description
              </th>
              <th className="text-left text-sm font-bold text-[#072635] py-3 px-5 rounded-tr-2xl">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#F6F7F8] last:border-b-0"
              >
                <td className="py-4 px-5 text-sm text-[#072635]">
                  {item.name}
                </td>
                <td className="py-4 px-5 text-sm text-[#072635]">
                  {item.description}
                </td>
                <td className="py-4 px-5 text-sm text-[#072635]">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
