import React, { createContext, useState } from "react";

export const themes = {
  light: {
    primary: "#f05228",
    secondary: "#303030",
    tertiary: "#f1f1f1",
    primaryText: "#303030",
    secondaryText: "#f1f1f1",
  },
  dark: {
    primary: "#303030",
    secondary: "#f05228",
    tertiary: "#6b1d08",
    primaryText: "#ffffff",
    secondaryText: "#f05228",
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
