import React from "react";
import { Line } from "react-chartjs-2";
import Respiratory from "../assets/respiratory rate.png";
import Temperature from "../assets/temperature.png";
import HearRate from "../assets/HeartBPM.png";
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
import { FaSortDown, FaSortUp } from "react-icons/fa";

// Register Chart.js components we'll be using
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

  // Grab the last 6 months of data and flip the order so it shows chronologically
  const last6Months = diagnosisHistory.slice(0, 6).reverse();

  // Setup the chart data with systolic and diastolic readings
  const chartData = {
    labels: last6Months.map(
      (entry) => `${entry.month.substring(0, 3)}, ${entry.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: last6Months.map((entry) => entry.blood_pressure.systolic.value),
        borderColor: "#E66FD2", // Pink line
        backgroundColor: "rgba(230, 111, 210, 0.1)",
        tension: 0.4, // Makes the line curved instead of straight
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: "Diastolic",
        data: last6Months.map((entry) => entry.blood_pressure.diastolic.value),
        borderColor: "#8C6FE6", // Purple line
        backgroundColor: "rgba(140, 111, 230, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  // Chart configuration - styling and behavior
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We're using custom legend in the sidebar
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
        ticks: {
          stepSize: 20, // Shows 60, 80, 100, 120, 140, 160, 180
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          display: true,
          color: "#E0E5E7", // Light gray horizontal lines
          drawBorder: false,
          lineWidth: 1,
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false, // No vertical lines
        },
        border: {
          display: false,
        },
      },
    },
  };

  // Pull the most recent readings for the stats cards
  const latestEntry = diagnosisHistory[0];

  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-2xl font-extrabold text-[#072635] mb-10">
        Diagnosis History
      </h2>

      {/* Blood Pressure Chart Section */}
      <div className="flex items-start gap-15 bg-[#F4F0FE] rounded-xl p-5 mb-5">
        <div className="w-[80%] grid mb-6">
          <div className="flex justify-between">
            <h3 className="text-[18px] font-bold text-[#072635] mb-1">
              Blood Pressure
            </h3>
            <div className="flex items-start gap-2">
              <p className="text-[14px] text-[#072635]">Last 6 months</p>
              <FaSortDown />
            </div>
          </div>
          {/* Chart */}
          <div className="h-[280px] mb-5">
            <Line data={chartData} options={options} />
          </div>
        </div>

        {/* Blood Pressure Summary Cards */}
        <div className="w-[25%] pt-5">
          <div className="grid gap-6">
            {/* Systolic */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#E66FD2]"></div>
                <p className="text-sm font-bold text-[#072635]">Systolic</p>
              </div>
              <p className="text-[22px] font-extrabold text-[#072635] mb-2">
                {latestEntry.blood_pressure.systolic.value}
              </p>
              <div className="flex items-end gap-1.5">
                <FaSortUp />
                <p className="text-sm text-[#072635]">
                  {latestEntry.blood_pressure.systolic.levels}
                </p>
              </div>
            </div>

            {/* Diastolic */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#8C6FE6]"></div>
                <p className="text-sm font-bold text-[#072635]">Diastolic</p>
              </div>
              <p className="text-[22px] font-extrabold text-[#072635] mb-2">
                {latestEntry.blood_pressure.diastolic.value}
              </p>
              <div className="flex items-start gap-1.5">
                <FaSortDown />
                <p className="text-sm text-[#072635]">
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
        <div className="bg-[#E0F3FA] rounded-xl p-5">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <img src={Respiratory} alt="respiratory" />
          </div>
          <p className="text-sm font-medium text-[#072635] mb-2">
            Respiratory Rate
          </p>
          <p className="text-[30px] font-extrabold text-[#072635] mb-1">
            {latestEntry.respiratory_rate.value} <span>bpm</span>
          </p>
          <p className="text-sm text-[#072635]">
            {latestEntry.respiratory_rate.levels}
          </p>
        </div>

        {/* Temperature */}
        <div className="bg-[#FFE6E9] rounded-xl p-5">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <img src={Temperature} alt="temperature" />
          </div>
          <p className="text-sm font-medium text-[#072635] mb-2">Temperature</p>
          <p className="text-[30px] font-extrabold text-[#072635] mb-1">
            {latestEntry.temperature.value} <span>°F</span>
          </p>
          <p className="text-sm text-[#072635]">
            {latestEntry.temperature.levels}
          </p>
        </div>

        {/* Heart Rate */}
        <div className="bg-[#FFE6F1] rounded-xl p-5">
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <img src={HearRate} alt="heart rate" />
          </div>
          <p className="text-sm font-medium text-[#072635] mb-2">Heart Rate</p>
          <p className="text-[30px] font-extrabold text-[#072635] mb-1">
            {latestEntry.heart_rate.value} <span>bpm</span>
          </p>
          <div className="flex items-start gap-1.5">
            <FaSortDown />
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
