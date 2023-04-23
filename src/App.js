import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState([]);
  const [data, setData] = useState({ name: "", age: "" });

  // const handleDelete = (data) => {
  //   // const arr = name.filter((data) => data.info !== info);
  //   console.log(data.id);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "" || data.age === "") {
      alert("Name and Regester number can not be empty");
    }
    // if (typeof parseInt(data.age) !== "number") {
    //   alert("ji");
    // }

    const info = { ...data, id: new Date().getTime().toString() };
    setName([...name, info]);

    console.log(name);

    setData({ name: "", age: "" });
  };
  const handleSort = () => {
    const sorted = name.sort((a, b) => a.age - b.age).map((data) => data);
    setName(sorted);
    console.log(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>NAME</label>

        <input
          type="text"
          placeholder="Enter you're name"
          value={data.name}
          name="name"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        ></input>

        <label>Reg Number</label>

        <input
          type="text"
          value={data.age}
          name="age"
          onChange={(e) => {
            setData({ ...data, age: e.target.value });
          }}
          placeholder="Add age as Reg no"
        ></input>
        <input className="submit" type="submit" />
      </form>
      <br></br>
      <button className="sort" onClick={handleSort}>
        Sort by regester number
      </button>
      <div>
        {name.map((data, index) => (
          <div key={index} className="data">
            <span> {data.name}</span>
            <span> {data.age}</span>

            <button
              value={data}
              onClick={() => {
                //const id = name.indexOf(data);
                // const newFruits = name.filter((_, i) => i !== index);
                // setName(newFruits);
                // const arr = name.filter((id)=>i!==data.id)

                const datid = data.id;

                const arr = name.filter((data) => data.id !== datid);
                setName(arr);
                console.log(name);
              }}
              className="delete"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
// const id = name.indexOf(data);
// // name.splice(1, 2);

// const arr = name.splice(id, 1);
// // setName(...name, arr);
// setName([...name, name]);

// console.log(name);
