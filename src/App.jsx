import { use, useState } from "react";

import "./App.css";

function App() {
    let [tempID, setTempID] = useState(1);
    const [arrayList, setArrayList] = useState([]);
    const [inputsVal, setInputsVal] = useState({
        id: tempID,
        trip: 1,
        item: "",
        complete: true,
    });

    function addToList(list) {
        if (list.item === "") return;
        setArrayList((prev) => [...prev, list]);
        console.log(arrayList);

        setTempID(tempID + 1);

        setInputsVal((prev) => ({
            id: prev.id + 1,
            trip: 1,
            item: "",
            complete: true,
        }));
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setInputsVal((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        addToList(inputsVal);
    }

    return (
        <>
            <div className="app-container">
                <div>
                    <h1 className="title-h1">Far Away</h1>
                </div>
                <Form
                    inputsVal={inputsVal}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <PacketList arrayList={arrayList} />
                <Stats />
                <FormExample />
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
function Form({ inputsVal, handleChange, handleSubmit }) {
    return (
        <div className="form-container">
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="numb-trip-items">
                    What do you need for your trip?
                    <select
                        name="trip"
                        id="numb-trip-items"
                        value={inputsVal.trip}
                        onChange={handleChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        name="item"
                        value={inputsVal.item}
                        id="task-name"
                        placeholder="item.."
                        onChange={handleChange}
                    />

                    <button type="Submit">ADD</button>
                </label>
            </form>
        </div>
    );
}
function PacketList({ arrayList }) {
    return (
        <div className="list-container">
            <div className="lists">
                {arrayList.map((item) => (
                    <div key={item.id} className="list-card">
                        <input
                            type="checkbox"
                            name="list-checkbox"
                            id="list-checkbox"
                            className="list-checkbox"
                            disabled={item.complete}
                        />
                        <p className="list-text">{item.item}</p>
                        <span className="delete-btn">❌</span>
                    </div>
                ))}
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

function FormExample() {
    const [inputVal, setInputVal] = useState({
        name: "",
        age: "",
        tripItemCount: 1,
    });

    function handleSubmit() {}
    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value);

        setInputVal((prev) => ({ ...prev, [name]: value }));
        console.log(inputVal);
    }
    return (
        <div className="form-example">
            {/* Start of form */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:{" "}
                    <input
                        type="text"
                        name="name"
                        value={inputVal.name}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={inputVal.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    what do you need for the trip?
                    <select
                        name="tripItemCount"
                        value={inputVal.tripCount}
                        onChange={handleChange}
                        id=""
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
            </form>
        </div>
    );
}
export default App;
