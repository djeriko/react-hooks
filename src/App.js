import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  // const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    console.log("render");

    return () => {
      console.log("unmount");
    };
  }, [values.email]);

  return (
    <div>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input
        name="email"
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstName"
        placeholder="Enter name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
