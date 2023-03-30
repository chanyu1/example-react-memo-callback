import React, { memo } from "react";

const Child = ({ name, age, tellMe }) => {
  console.log("Rendering child component");

  return (
    <div
      style={{
        border: "2px solid powderblue",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      <h3>child</h3>
      <p>name: {name}</p>
      {/* <p>
        name: {name.lastName} {name.firstName}
      </p> */}
      <p>age: {age}</p>
      <button onClick={tellMe}>hey</button>
    </div>
  );
};

export default memo(Child);
