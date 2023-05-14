const Schedule = () => {
  const scheduleDetails = [
    {
      title: "Meeting with suppliers from Kuta bali",
      time: "14:00-15:00",
      address: "at Sunset road, Kuta, Bali",
      border: "border-orange-300",
    },
    {
      title: "Check operation at Giga factory 1",
      time: "18:00-20:00",
      address: "at Central Jakarta",
      border: "border-blue-500",
    },
  ];
  return (
    <div className="w-1/2 bg-white p-4 mt-4 ml-2 rounded-2xl">
      <div className="font-bold text-2xl">Todays schedule</div>
      {scheduleDetails.map((item) => {
        return (
          <div
            key={item.time}
            className={"mt-6 border-s-4 pl-2 mb-2 " + item.border}
          >
            <div className="font-bold"> {item.title}</div>
            <div className="text-gray-400">{item.time}</div>
            <div className="text-gray-400"> {item.address}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
