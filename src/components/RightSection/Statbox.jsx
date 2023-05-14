/* eslint-disable react/prop-types */
import {} from "react-icons/all";

const Statbox = ({ title, number, icon, bgColor }) => {
  const MyIcon = icon;
  return (
    <div className={"inline-block mr-6 p-4 w-48 h-fit rounded-2xl" + " " + bgColor}>
      <MyIcon className="ml-auto" />
      <div>{title}</div>
      <div className=" font-semibold text-lg">{number}</div>
    </div>
  );
};

export default Statbox;



