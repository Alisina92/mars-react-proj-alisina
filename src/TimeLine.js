import React from "react";

const TimeLine = (props) => {
  console.log(props);
  function dateToPercent(date, timelineMin, timelineMax) {
    let timelineLength = timelineMax.getTime() - timelineMin.getTime();
    return ((date.getTime() - timelineMin.getTime()) / timelineLength)*100;
  }
  const timelineMin = new Date('2003'); //Change me
  const timelineMax = new Date('2020'); //Change me
  dateToPercent(new Date("2019-01-01"), timelineMin, timelineMax);
  // 0.5
    props.values.rovers.sort((a,z)=>new Date(a.launch_date)- new Date(z.launch_date));
  return (
    <div className="chart-flex">
       <h3>Overlapped landing data</h3>
      {props.values.rovers.map((robots) => {
        return (
          <div
            style={{
              width: "30%",
              "margin-left": dateToPercent(new Date(robots.launch_date),timelineMin,timelineMax)+'%',
            }}
            className="landing"
          >
            {robots.landing_date}

           
          </div>
        );
      })}
    </div>

    // // <div style={{ width: "30%", "margin-left": "60%" }} className="landing">
    //     3
    //   </div>

    //     {/* <div style={{ width: "30%", "margin-left": "40%" }} className="launching"> */}

    //         {/* </div> */}
  );
};

export default TimeLine;
