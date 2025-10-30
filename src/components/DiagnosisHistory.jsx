import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import respiratoryIcon from "../../assets/respiratoryRate.svg";
import temperatureIcon from "../../assets/temperature.svg";
import heartIcon from "../../assets/HeartBPM.svg";
import expandIcon from "../../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import arrowUpIcon from "../../assets/ArrowUp.svg";
import arrowDownIcon from "../../assets/ArrowDown.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DiagnosisHistory = ({ diagnosisHistory }) => {
  if (!diagnosisHistory || diagnosisHistory.length === 0) {
    return <div>No diagnosis history available</div>;
  }

  // Get last 6 months and reverse to show oldest to newest
  const last6Months = diagnosisHistory.slice(0, 6).reverse();

  // Prepare chart data
  const chartData = {
    labels: last6Months.map(
      (entry) => `${entry.month.substring(0, 3)}, ${entry.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: last6Months.map((entry) => entry.blood_pressure.systolic.value),
        borderColor: "#E66FD2",
        backgroundColor: "rgba(230, 111, 210, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: "Diastolic",
        data: last6Months.map((entry) => entry.blood_pressure.diastolic.value),
        borderColor: "#8C6FE6",
        backgroundColor: "rgba(140, 111, 230, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(7, 38, 53, 0.9)",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#E0E0E0",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        grid: {
          color: "#f0f0f0",
        },
        ticks: {
          color: "#072635",
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#072635",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Get latest entry for the summary cards
  const latestEntry = diagnosisHistory[0];

  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-2xl font-extrabold text-[#072635] mb-10">
        Diagnosis History
      </h2>

      {/* Blood Pressure Chart Section */}
      <div className="bg-[#F4F0FE] rounded-xl p-4 mb-5">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#072635] mb-1">
              Blood Pressure
            </h3>
            <p className="text-sm text-[#072635] flex items-center gap-2">
              Last 6 months
              <img src={expandIcon} alt="" className="w-3 h-3" />
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[240px] mb-4">
          <Line data={chartData} options={options} />
        </div>

        {/* Blood Pressure Summary */}
        <div className="grid grid-cols-2 gap-5 mt-4">
          {/* Systolic */}
          <div className="flex items-start gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E66FD2] mt-1"></div>
            <div>
              <p className="text-sm font-bold text-[#072635] mb-1">Systolic</p>
              <p className="text-[22px] font-bold text-[#072635] mb-1">
                {latestEntry.blood_pressure.systolic.value}
              </p>
              <div className="flex items-center gap-2">
                <img src={arrowUpIcon} alt="" className="w-2.5 h-2.5" />
                <p className="text-xs text-[#072635]">
                  {latestEntry.blood_pressure.systolic.levels}
                </p>
              </div>
            </div>
          </div>

          {/* Diastolic */}
          <div className="flex items-start gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8C6FE6] mt-1"></div>
            <div>
              <p className="text-sm font-bold text-[#072635] mb-1">Diastolic</p>
              <p className="text-[22px] font-bold text-[#072635] mb-1">
                {latestEntry.blood_pressure.diastolic.value}
              </p>
              <div className="flex items-center gap-2">
                <img src={arrowDownIcon} alt="" className="w-2.5 h-2.5" />
                <p className="text-xs text-[#072635]">
                  {latestEntry.blood_pressure.diastolic.levels}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vital Stats Cards */}
      <div className="grid grid-cols-3 gap-5">
        {/* Respiratory Rate */}
        <div className="bg-[#E0F3FA] rounded-xl p-4">
          <img
            src={respiratoryIcon}
            alt="Respiratory Rate"
            className="w-24 h-24 mb-4"
          />
          <p className="text-base font-medium text-[#072635] mb-2">
            Respiratory Rate
          </p>
          <p className="text-[30px] font-extrabold text-[#072635] mb-2">
            {latestEntry.respiratory_rate.value} bpm
          </p>
          <p className="text-sm text-[#072635]">
            {latestEntry.respiratory_rate.levels}
          </p>
        </div>

        {/* Temperature */}
        <div className="bg-[#FFE6E9] rounded-xl p-4">
          <img
            src={temperatureIcon}
            alt="Temperature"
            className="w-24 h-24 mb-4"
          />
          <p className="text-base font-medium text-[#072635] mb-2">
            Temperature
          </p>
          <p className="text-[30px] font-extrabold text-[#072635] mb-2">
            {latestEntry.temperature.value}°F
          </p>
          <p className="text-sm text-[#072635]">
            {latestEntry.temperature.levels}
          </p>
        </div>

        {/* Heart Rate */}
        <div className="bg-[#FFE6F1] rounded-xl p-4">
          <img src={heartIcon} alt="Heart Rate" className="w-24 h-24 mb-4" />
          <p className="text-base font-medium text-[#072635] mb-2">
            Heart Rate
          </p>
          <p className="text-[30px] font-extrabold text-[#072635] mb-2">
            {latestEntry.heart_rate.value} bpm
          </p>
          <div className="flex items-center gap-2">
            <img src={arrowDownIcon} alt="" className="w-2.5 h-2.5" />
            <p className="text-sm text-[#072635]">
              {latestEntry.heart_rate.levels}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
