import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
