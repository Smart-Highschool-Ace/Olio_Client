import { Theme } from "styled-system";

export interface ThemeInterface extends Theme {
  colors: {
    primary: string;
    secondary: string;
    gray5: string;
    gray10: string;
    gray30: string;
    gray40: string;
    gray60: string;
    gray80: string;
    gray90: string;
    gray100: string;
    newSecondary: string;
  };
  breakpoints: string[];
}

const defaultButtonProps = {
  bg: "primary",
  borderRadius: "27px",
  p: "13px 25px",
  fontSize: "15px",
  fontWeight: 500,
  color: "secondary",
  borderColor: "gray80",
  letterSpacing: "-0.75px",
  cursor: "pointer",
};

const defaultTheme: ThemeInterface = {
  breakpoints: ["360px", "720px", "1024px", "1680px"],
  colors: {
    primary: "#3F00DD",
    secondary: "#F6EEC1",
    gray5: "#fbfbfb",
    gray10: "#f2f2f2",
    gray30: "#f1f1f1",
    gray40: "#e6e6e6",
    gray60: "#d9d9d9",
    gray80: "#c8c8c8",
    gray90: "#6e6e6e",
    gray100: "#3e3e3e",
    newSecondary: "#F6EEC1",
  },
  buttons: {
    primary: {
      ...defaultButtonProps,
      ":hover": {
        bg: "#5B22E9",
        color: "white",
      },
    },
    secondary: {
      ...defaultButtonProps,
      bg: "white",
      border: "2px solid",
      borderColor: "primary",
      p: "13px 25px",
      color: "primary",
      ":hover": {
        bg: "secondary",
      },
    },
    disabled: {
      ...defaultButtonProps,
      bg: "gray80",
      color: "white",
      cursor: "not-allowed",
    },
    square: {
      ...defaultButtonProps,
      border: "1px solid",
      borderRadius: "0px",
    },
    border: {
      ...defaultButtonProps,
      bg: "transparent",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      ":hover": {
        bg: "#5B22E9",
        color: "white",
      },
    },
    popup: {
      ...defaultButtonProps,
      color: "white",
      fontSize: "15px",
      p: "6px 26px",
      borderRadius: "18px",
      ":hover": {
        bg: "#5B22E9",
        color: "white",
      },
    },
  },
};

export default defaultTheme;
