// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Passwordefault } from "./style";

// const PasswordDefault = ({ placeholder, ...rest }) => {
//   return <Passwordefault placeholder={placeholder} {...rest}></Passwordefault>;
// };

// export default PasswordDefault;

import React, { Component } from "react";
import {
  PasswordDefaultInput,
  PasswordInputBtn,
  PasswordInputWrapper,
} from "./style";

import EyeHideIcon from "../../../assets/icons/eye-hide.svg";
import EyeOpenIcon from "../../../assets/icons/eye-open.svg";

export default class PasswordDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }
  render() {
    let { type, disabled, placeholder, ...res } = this.props;
    const hideFunc = () => {
      this.setState({ hidden: !this.state.hidden });
    };
    return (
      <PasswordInputWrapper>
        <PasswordDefaultInput
          type={this.state.hidden !== true ? type : "text"}
          disabled={disabled}
          placeholder={placeholder}
          {...res}
        ></PasswordDefaultInput>
        <PasswordInputBtn onClick={hideFunc}>
          {this.state.hidden ? (
            <img src={EyeHideIcon} alt="img" />
          ) : (
            <img src={EyeOpenIcon} alt="img" />
          )}
        </PasswordInputBtn>
      </PasswordInputWrapper>
    );
  }
}


