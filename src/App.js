import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("Rendering parent component");

  // const name = useMemo(() => {
  //   return {
  //     lastName: "seo",
  //     firstName: "gil",
  //   };
  // }, []);

  const tellMe = useCallback(() => {
    console.log("why");
  }, []);

  // const tellMe = () => {
  //   console.log("why");
  // };

  return (
    <div style={{ border: "2px solid navy", margin: "10px", padding: "10px" }}>
      <h1>parent</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>increment parent age</button>
      <button onClick={incrementChildAge}>increment child age</button>
      <Child
        name={"seo"}
        // name={name}
        age={childAge}
        tellMe={tellMe}
      />
    </div>
  );
}

export default App;
