import { use, useState } from "react";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <div className="app-container">
        <div>
          <h1 className="title-h1">Far Away</h1>
        </div>
        <Form />
        <PacketList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return (
    <div>
      <h1 className="title-h1">Far Away</h1>
    </div>
  );
}
function Form() {
  return (
    <div className="form-container">
      <p>What do you need for your trip?</p>
      <form action="submit">
        <select name="" id="">
          <option value=""></option>
        </select>
        <input type="text" name="" id="task-name" placeholder="item.." />
        <input type="button" value="ADD" />
      </form>
    </div>
  );
}
function PacketList() {}
function Stats() {}
export default App;
