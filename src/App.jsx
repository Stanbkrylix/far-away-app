import { use, useState } from "react";

import "./App.css";

function App() {
    let [tempID, setTempID] = useState(1);
    const [arrayList, setArrayList] = useState([]);
    const [inputsVal, setInputsVal] = useState({
        id: tempID,
        trip: 0,
        item: "",
        complete: true,
    });

    function resetValues() {
        setTempID(tempID + 1);

        setInputsVal((prev) => ({
            id: prev.id + 1,
            trip: prev.trip - 1,
            item: "",
            complete: true,
        }));
    }

    function addToList(list) {
        if (list.item === "" || !list.trip) {
            alert("Number of trips or items cannot be empty");
            return;
        }
        setArrayList((prev) => [...prev, list]);
        console.log(arrayList);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setInputsVal((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        addToList(inputsVal);
        resetValues();
    }

    function onDelete(id) {
        // delete selected item
        setArrayList((prev) => prev.filter((item) => item.id !== id));
    }
    function onPack(id) {
        // updating checkbox
        setArrayList((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, complete: !item.complete } : item
            )
        );
    }

    function clearList() {
        if (arrayList.length === 0) return;
        const confirm = prompt(
            "are you sure you want to clear the list? if yes press 'y' or if no press 'n'"
        );

        if (confirm.toLowerCase() === "y") {
            setArrayList([]);
            return;
        }

        if (confirm.toLocaleLowerCase() === "n") {
            return;
        } else {
            alert("please press 'y' for yes and 'n' for no");
        }
    }

    function sortArrayList(event) {
        const target = event.target.value;

        if (target === "status") {
            setArrayList((prev) =>
                [...prev].sort((a, b) => b.complete - a.complete)
            );
        }

        if (target === "description") {
            console.log(target);

            const sorted = [...arrayList].sort((a, b) =>
                a.item.localeCompare(b.item)
            );

            setArrayList(sorted);
        }

        if (target === "order") {
            console.log(target);
            setArrayList((prev) => [...prev].sort((a, b) => a.id - b.id));
        }
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
                <PacketList
                    arrayList={arrayList}
                    onDelete={onDelete}
                    onPack={onPack}
                    clearList={clearList}
                    sortArrayList={sortArrayList}
                />
                <Stats />
                {/* <FormExample /> */}
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
                        <option value="0"></option>
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
function PacketList({ arrayList, onDelete, onPack, clearList, sortArrayList }) {
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
                            checked={!item.complete}
                            onChange={() => onPack(item.id)}
                        />
                        <p
                            className={`list-text ${
                                item.complete ? "" : "pack"
                            }`}
                        >
                            {item.item}
                        </p>
                        <span
                            className="delete-btn"
                            onClick={() => onDelete(item.id)}
                        >
                            ❌
                        </span>
                    </div>
                ))}
            </div>

            {/*  */}
            <div className="sort-div">
                <select name="sort-by" id="sort-by" onChange={sortArrayList}>
                    <option value="order">sort by input order</option>
                    <option value="description">sort by description</option>
                    <option value="status">sort by packed status</option>
                </select>
                <input
                    type="button"
                    value="Clear List"
                    className="clear-btn"
                    onClick={clearList}
                />
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
