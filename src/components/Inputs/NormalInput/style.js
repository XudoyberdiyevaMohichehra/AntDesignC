import styled from "styled-components";


const getColor = ({ type }) => {
  switch (type) {
    case "success":
      return {
        color: "var(--greenColor)",
        border: "1px solid var(--greenColor)",
        "::placeholder": {
          color: "var(--greenColor)",
        },
        ":focus": {
          border:'1px solid var(--greenColor);' ,
          boxShadow:'0 0 5px 1px var(--greenColor)',
        },
      };
    case "danger":
      return {
        color: "var(--danger)",
        border: "1px solid var(--danger)",
        "::placeholder": {
          color: "var(--danger)",
        },
        ":focus": {
          border:'1px solid var(--dangerColor);' ,
          boxShadow:'0 0 4px 1px var(--dangerColor)',
        },
      };
    case "default":
      return {
        color: "#969294FF",
        border: "1px solid #969294FF",
        "::placeholder": {
          color: "#969294FF",
        },
        ":focus": {
          border:'1px solid var(--primaryBgColor);' ,
          boxShadow:'0 0 5px 1px var(--primaryBgColor)',
        },
        
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
        padding: "10px 12px",
        fontSize: "16px",
      };

    default: {
    }
  }
};

export const Container = styled.input`
  ${getColor}
  ${getSize}
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  // text-align: left;
  outline:none;
`;


