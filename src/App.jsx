import "./App.css";
// import Die from "./Die";
// import Greeter from "./Greeter";
// import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

function App() {
  return (
    <div>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />


      {/* <ListPicker values={[1,2,3]}/> */}
      {/* <ListPicker values={["a","b","c"]}/> */}
      {/* <Greeter person="Bill" from="Colt"/>
      <Greeter person="Ted" />
      <Greeter from="Elton"/>
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;