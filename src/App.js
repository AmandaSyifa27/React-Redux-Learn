import BarChart from "./components/chartsDemo.js/BarChart";
import LineGraph from "./components/chartsDemo.js/LineGraph";
import PieChart from "./components/chartsDemo.js/PieChart";
import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Haii</h1>
      <em>Latihan React Redux</em>
      <br/>
      <br/>
      <Counter />
      <LineGraph />
      <PieChart />
      <BarChart />
    </div>
  );
}

export default App;
