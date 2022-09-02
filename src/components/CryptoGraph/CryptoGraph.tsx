import React from "react";
import { Line } from "react-chartjs-2";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65, 85],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76.79],
//       fill: false,
//       borderColor: "#742774",
//     },
//   ],
// };

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Cryptocurrency Prices",
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: "Price, $",
        },
      },
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Bitcoin",
      data: [33, 53, 85, 41, 44, 65, 85],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.4,
    },
    {
      label: "Ethereum",
      data: [45, 25, 35, 51, 54, 76, 79],
      borderColor: "#742774",
      fill: false,
      tension: 0.2,
    },
  ],
};

const CryptoGraph = () => {
  return (
    <div style={{ paddingBottom: "140px" }}>
      <div>
        <BannerHeader
          fontSize="17px"
          fontWeight="100"
          marginbottom="2rem"
          textAlign="center">
          POPULAR CRYPTOCARRENCY PRICES
        </BannerHeader>

        <BannerHeader
          maxWidth="60px"
          margin="0 auto"
          textAlign="center"
          fontSize="40px"
          fontWeight="600"
          marginbottom="60px"
          color="black">
          Cryptocurrency Prices
        </BannerHeader>
      </div>
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CryptoGraph;
