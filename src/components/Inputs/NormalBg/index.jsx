import React from "react";
import { BgColor } from "./style";

const BgColorInput = ({bgColor, disabled, placeholder, ...rest }) => {
  return <BgColor bgColor={bgColor} disabled={disabled} placeholder={placeholder} {...rest}></BgColor>;
};

export default BgColorInput;

