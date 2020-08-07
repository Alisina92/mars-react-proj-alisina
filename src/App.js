import React,{useState,useEffect} from "react";
import Title from './Title';
import MarsData from './MarsData';
import TimeLine from "./TimeLine";
import StoppedMarsData from'./StoppedImageData';
import "./App.css";

const App = () => {
  const [values, setValues] = useState(null);
   
  useEffect(() => {
    async function dataFetcher() {
      const Response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=EadfbVGxCxoFbSGyTWjZGVn7acbeQMSkcVlWJKdU`
      );
      if (!Response.ok) {
        throw new Error(`HTTP error! status: ${Response.status}`);
      } else {
        let myData = await Response.json();
        setValues(myData);
      }
    }
    dataFetcher();
  }, []);
  if (values === null) {
    return "Loading...";
  } else {
    return (
      <div className="App">
        <Title />
        <MarsData values={values} setValues={setValues} />
        <TimeLine values={values} setValues={setValues} />
        <StoppedMarsData values={values} setValues={setValues} />
      </div>
    );
  }
  
};

export default App;
