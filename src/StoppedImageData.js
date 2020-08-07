import React, { useState } from "react";

const StoppedImageData = (props) => {
  const [roverCount, setRoverCount] = useState(0);
  const [day, setDay] = useState(0);

  console.log(props.values.rovers);

  const calculateRoversForDate = (dateString) => {
     const roversForDate = props.values.rovers.filter((rover) => {
       let date = new Date(dateString)
       return (
          new Date(rover.landing_date) <= date &&
          new Date(rover.max_date) >= date
          )
         });
         console.log("compare",dateString,roversForDate)
   return roversForDate.length;
   };

  return (
    <div>
      days:{" "}
      <input
        type="date"
        defaultValue={day}
        onChange={(event) => {
          const day = event.target.value;
          setDay(day);
          setRoverCount(calculateRoversForDate(day));
        }}
      />
      <h1>Rovers: {roverCount}</h1>
    </div>
  );
};

export default StoppedImageData;
