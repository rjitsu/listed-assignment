import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const TopProducts = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        label: "% of Products",
        data: [55, 14, 31],
        backgroundColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(238, 132, 132, 1)",
          "rgba(246, 220, 125, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-1/2 bg-white p-4 mt-4 rounded-2xl inline-block mr-4">
      <div className="font-bold text-2xl">Top products</div>
      <div className="flex justify-between">
        <div className="w-1/2 h-1/2">
          {" "}
          <Pie data={data} />
        </div>
        <ul className="font-bold mt-2">
          <li>
            {" "}
            <span
              className="rounded-full w-4 h-4 inline-block mr-2"
              style={{ background: "rgba(152, 216, 158, 1)" }}
            ></span>{" "}
            Basic tees
          </li>
          <li className="text-gray-400 font-normal ml-6 mb-4"> 55%</li>
          <li>
            {" "}
            <span
              className="bg-blue-400 rounded-full w-4 h-4 inline-block mr-2"
              style={{ background: "rgba(238, 132, 132, 1)" }}
            ></span>
            Custom short pants
          </li>
          <li className="text-gray-400 font-normal ml-6 mb-4"> 14%</li>
          <li>
            <span
              className="bg-green-400 rounded-full w-4 h-4 inline-block mr-2"
              style={{ background: "rgba(246, 220, 125, 1)" }}
            ></span>{" "}
            Super hoodies
          </li>
          <li className="text-gray-400 font-normal ml-6"> 31%</li>
        </ul>
      </div>
    </div>
  );
};

export default TopProducts;
