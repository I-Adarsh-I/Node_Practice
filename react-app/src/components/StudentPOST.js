import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";

function StudentPOST() {
  const [student_id, setStudent_id] = useState("");
  const [student_name, setStudent_name] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { student_id, student_name };
      await fetch("http://localhost:5000/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      window.location = "/studentpost";
    } catch (error) {
      console.error(error);
    }
  };

  const showData = async () => {
    try {
      const result = await fetch("http://localhost:5000/student");
      const dataReturn = await result.json();
      console.log(dataReturn);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div>
        <h1>Enter student details</h1>
        <form onSubmit={formSubmitHandler}>
          <label>Enter student ID: </label>
          <br />
          <input
            type="text"
            placeholder="ID"
            value={student_id}
            onChange={(e) => setStudent_id(e.target.value)}
          />{" "}
          <br />
          <label>Enter student name: </label>
          <br />
          <input
            type="text"
            placeholder="John Doe"
            value={student_name}
            onChange={(e) => setStudent_name(e.target.value)}
          />
          <br />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
        <Button variant="dark" onClick={showData}>
          GET
        </Button>
      </div>
    </Fragment>
  );
}

export default StudentPOST;
