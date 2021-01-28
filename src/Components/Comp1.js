import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";

const Comp1 = () => {
  const [data, setData] = useState([]);

  /********** componentDidMount*************/
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {
      console.log(data.data);
      setData(data.data);
    });
  }, []); // componentDidMount

  /***********************/

  console.log("Just checking the state", data);

  /************** Table Header*********/

  const tableHeader = () => {
    var keys = Object.keys(data[0]);
    console.log(keys); // ["userId", "id", "title", "completed"]
    return keys.map((key) => {
      return (
        <td>
          <td>{key}</td>
        </td>
      );
    });
  };

  /************** Tbody *********/

  const tableBody = () => {
    //data[{},{},{}]

    return data.map((d) => {
      return (
        <tr>
          <td>{d.userId}</td>
          <td>{d.id}</td>
          <td>{d.title}</td>
          <td>{"" + d.completed}</td>
        </tr>
      );
    });
  };

  if (data.length === 0) {
    return <p> Loading...... </p>;
  } else {
    return (
      <React.Fragment>
        <h1> Table of Todos</h1>

        <table>
          <thead>{tableHeader()}</thead>
          <tbody>{tableBody()}</tbody>
        </table>
      </React.Fragment>
    );
  }
};

export default Comp1;

//https://jsonplaceholder.typicode.com/todos
