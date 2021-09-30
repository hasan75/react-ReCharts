import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import MyAreaChart from './components/MyAreaChart/MyAreaChart';
import MyPieChart from './components/MyPieChart/MyPieChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
      <MyPieChart></MyPieChart>
    </div>
  );
}

export default App;
