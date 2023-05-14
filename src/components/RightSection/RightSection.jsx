import {
  BiMoney,
  BsTagsFill,
  AiOutlineLike,
  FiUsers,
  GrNotification,
} from "react-icons/all";
import Statbox from "./Statbox";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import TopProducts from "./TopProducts";
import Schedule from "./Schedule";
import { auth} from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RightSection = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  console.log(user);
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Activities",
      },
    },
  };
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Guest",
        data: [100, 121, 230, 345, 264, 153, 200, 300, 400, 500, 322, 222, 124],
        borderColor: "rgba(155, 221, 124, 1)",
      },
      {
        label: "User",
        data: [200, 300, 400, 300, 200],
        fill: false,
        borderColor: "rgba(233, 160, 160, 1)",
      },
    ],
  };

  const statBoxData = [
    {
      bgColor: "bg-yellow-100",
      title: "Total Revenues",
      number: "$2,11,432",
      icon: BiMoney,
    },
    {
      bgColor: "bg-red-100",
      title: "Total transactions",
      number: "7,144",
      icon: BsTagsFill,
    },
    {
      bgColor: "bg-blue-100",
      title: "Total likes",
      number: "9,721",
      icon: AiOutlineLike,
    },
    {
      bgColor: "bg-neutral-300",
      title: "Total users",
      number: "892",
      icon: FiUsers,
    },
  ];

  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className=" font-bold text-2xl m-4 ml-0">Dashboard</div>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          className="bg-white rounded-xl p-2 ml-auto h-8"
        />
        <GrNotification className="mx-4" />
        <div className="flex flex-col">
        <img
        
          onClick={()=> setIsMenuVisible(!isMenuVisible)}
          src={user && user.photoURL || "https://i.pravatar.cc/300"}
          title={user && user.displayName}
          className="cursor-pointer w-12 h-12 rounded-full bg-red-400"
        ></img>
        <ul className={`absolute top-20 right-56 cursor-pointer p-6 bg-white rounded-lg ${isMenuVisible ? "block": "hidden"}`} >
          <li onClick={handleSignOut}>Sign out</li>
        </ul>
        </div>
      </div>
      <div className="flex">
      
        {statBoxData.map((item) => (
          <Statbox
            key={item.title}
            bgColor={item.bgColor}
            title={item.title}
            number={item.number}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="bg-white p-4 mt-4 rounded-2xl">
        <Line options={options} data={data} />
      </div>
      <div className="flex mt-4">
        <TopProducts />
        <Schedule />
      </div>
    </div>
  );
};

export default RightSection;
