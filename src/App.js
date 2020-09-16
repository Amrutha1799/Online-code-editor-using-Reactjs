import React from "react";
import "./App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import Output from "./components/output";
import 'react-bootstrap';



function App() {
  
  return (

    <div className="App">
      <section className="playground">
        <Output />
      </section>
    </div>
  );
  
}


export default App;
