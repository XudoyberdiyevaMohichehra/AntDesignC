import styled from "styled-components";

const getColor = ({ inputType }) => {
  switch (inputType) {
    case "success":
      return {
        color: "var(--success)",
        border: "1px solid var(--success)",
        "::placeholder": {
          color: "var(--success)",
        },
      };
    case "danger":
      return {
        color: "var(--danger)",
        border: "1px solid var(--danger)",
        "::placeholder": {
          color: "var(--danger)",
        },
      };
    case "default":
      return {
        color: "#969294FF",
        border: "1px solid #969294FF",
        "::placeholder": {
          color: "#969294FF",
        },
      };

    default: {
    }
  }
};
const getBgColor = ({ bgColor }) => {
  switch (bgColor) {
    case "success":
      return {
        color: "var(--success)",
        border: "1px solid var(--success)",
        "::placeholder": {
          color: "var(--success)",
        },
        backgroundColor: "#E3F7ECFF",
      };
    case "danger":
      return {
        color: "var(--danger)",
        border: "1px solid var(--danger)",
        "::placeholder": {
          color: "var(--danger)",
        },
        backgroundColor: "#FFE9EDFF",
      };
    case "default":
      return {
        color: "#969294FF",
        border: "1px solid #969294FF",
        "::placeholder": {
          color: "#969294FF",
        },
        backgroundColor: "#F5F5F5FF",
      };

    default: {
    }
  }
};

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        padding: "8px",
        fontSize: "12px",
      };
    case "medium":
      return {
        padding: "10px",
        fontSize: "14px",
      };
    case "large":
      return {
        padding: "12px",
        fontSize: "16px",
      };

    default: {
    }
  }
};

export const PasswordSuccessInput = styled.input`
  background-color: #fff;
  ${getColor}
  ${getSize}
  /* ${getBgColor} */
  width: 100%;
  border-radius: 4px;
  text-align: left;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : null)};
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordInputBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  & svg {
    width: 100%;
    color: var(--success);
  }
  :active {
    opacity: 0.8;
  }
`;