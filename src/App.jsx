import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./context/theme-context";
import { HomePage } from "./page/home/HomePage";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`

  	html{
      font-family: 'Josefin Sans', sans-serif;
		color: #303030;
  	}

  	* {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	a{
		text-decoration: none;
		color: #000000;
	}
  
	ul{
		list-style: none;
	}
`;
