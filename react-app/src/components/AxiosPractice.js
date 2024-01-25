import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosPractice() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const getUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const postUser = async (e) => {
    e.preventDefault() 
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: name,
        id: id
      })
      console.log("Added data is", res.data);
    } catch (err) {
      console.error(err);
    }
getUser()

  };
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <div>
      <h1>Axios Practice</h1>
      <form onSubmit={postUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <br />
        <label htmlFor="name">ID</label>
        <input
          type="text"
          name="n_id"
          id="n_id"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" onClick={(e) => postUser(e)}>
          submit
        </button>
      </form>
    </div>
  );
}

export default AxiosPractice;
