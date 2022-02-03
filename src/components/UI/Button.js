import React from "react";

import classes from "./Buttom.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || "buton"}></button>
  );
};
