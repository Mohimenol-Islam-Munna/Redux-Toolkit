import "./App.css";
import Counter from "./Components/Counter";
import Posts from "./Components/Posts";
import Users from "./Components/Users";
import RTKComponent from "./Components/RTKComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Redux ToolKit Complete Practice</h3>
      </header>
      <RTKComponent /> 
      {/* <Users />
      <Counter />
      <Posts /> */}
    </div>
  );
}

export default App;
