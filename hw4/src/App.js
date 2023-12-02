// App.js
import React from "react";
import Header from "./component/Header";
import Projects from "./component/Project";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
