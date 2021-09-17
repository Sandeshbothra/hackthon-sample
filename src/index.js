import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import {  BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

ReactDom.render(<BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.querySelector('#root'));