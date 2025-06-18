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
            <form action="submit">
                <label htmlFor="numb-trip-items">
                    What do you need for your trip?
                </label>

                <select name="numb-trip-items" id="numb-trip-items">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input
                    type="text"
                    name=""
                    id="task-name"
                    placeholder="item.."
                />
                <input type="button" value="ADD" />
            </form>
        </div>
    );
}
function PacketList() {
    return (
        <div className="list-container">
            <div className="lists">
                <div className="list-card">
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className="list-checkbox"
                        disabled=""
                    />
                    <p className="list-text">Placeholder text</p>
                    <span className="delete-btn">❌</span>
                </div>
            </div>
            <div className="sort-div">
                <select name="sort-by" id="sort-by">
                    <option value="sort by input order">
                        sort by input order
                    </option>
                    <option value="sort by description">
                        sort by description
                    </option>
                    <option value="sort by packed status">
                        sort by packed status
                    </option>
                </select>
                <input type="button" value="Clear List" className="clear-btn" />
            </div>
        </div>
    );
}
function Stats() {}
export default App;
