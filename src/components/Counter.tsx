import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [state, setState] = useState(0);

  const onButton = () => {
    setState((s) => s + 1);
  };
  return (
    <div>
      Counter
      <div className={classes.btn}>{state}</div>
      <button onClick={onButton}>+ 1</button>
    </div>
  );
};
