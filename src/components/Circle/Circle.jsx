import React from "react";
import classNames from "classnames";

import "./Circle.scss";


const Circle = ({color, onClick, className}) => { return (<div onClick={onClick} className={classNames("circle", {[`circle--${color}`]: color}, className)}></div>)};

export default Circle;
