import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "assets/styles/index.scss";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(

    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>,

  document.getElementById("root")
);
