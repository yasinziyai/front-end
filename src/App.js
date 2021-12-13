import React, { useState } from "react";
import { useEffect } from "react";
function App() {
  let [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((response) => {
        setList(response);
      });
  }, []);
  console.log(list);
  return (
    <div>
      {list.map((Item) => (
        <h1 key={Item}>{Item}</h1>
      ))}
    </div>
  );
}
export default App;
