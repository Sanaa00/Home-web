import React from "react";

function Numbers() {
  const numbers = [
    { id: 1, num: "15000+", title: "Successful Trades" },
    { id: 2, num: "6200+", title: "Happy Customers" },
    { id: 3, num: "360+", title: "Awards Won" },
    { id: 4, num: "17+", title: "Years Of Experience" },
  ];
  return (
    <>
      <div className="bg-white p-6 flex">
        {numbers.map((number) => {
          return (
            <div
              key={number.id}
              className="flex flex-col justify-between items-center w-full"
            >
              <p className="text-xl font-bold">{number.num}</p>
              <p className="text-sm">{number.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Numbers;
