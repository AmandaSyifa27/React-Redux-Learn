import BarChart from "./components/chartsDemo.js/BarChart";
import LineGraph from "./components/chartsDemo.js/LineGraph";
import PieChart from "./components/chartsDemo.js/PieChart";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>haii</h1>
      <em>kalo bisa bikin ecomers</em>
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
