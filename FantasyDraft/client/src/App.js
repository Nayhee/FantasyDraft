import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import ApplicationViews from "./ApplicationViews";

function App() {
  return (
    <Router>
      <ApplicationViews />
    </Router>
  );
}

export default App;
