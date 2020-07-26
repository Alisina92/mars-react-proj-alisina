import React from "react";

 
const MarsData = (props) => {
  
    console.log(props.values)
  // to do sorting...
  let LandingArr;
  let launchArr;
   LandingArr = props.values.rovers.map((element) => {
     return element.landing_date;
   });
  launchArr = props.values.rovers.map((el) => {
    return el.launch_date;
  });

  LandingArr.sort(function (a, z) {
    const A = a.split("-");
    const Z = z.split("-");
    const strA = [A[1], A[2], A[0]].join("-");
    const strZ = [Z[1], Z[2], Z[0]].join("-");
    return strA.localeCompare(strZ);
  });
  launchArr.sort(function (a, z) {
    const A = a.split("-");
    const Z = z.split("-");
    const strA = [A[1], A[2], A[0]].join("-");
    const strZ = [Z[1], Z[2], Z[0]].join("-");
    return strA.localeCompare(strZ);
  });
 
  
  return (
    <div className="table-flex">
      <div>
        <h3>Launching</h3>
        {launchArr.map((element) => {
          return <div>{element}</div>;
        })}
      </div>
      <div>
        <h3>Landing</h3>
        {LandingArr.map((element) => {
          return <div>{element}</div>;
        })}
      </div>
 
    </div>
  );
};

export default MarsData;
