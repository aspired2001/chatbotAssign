import React from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
function App() {
  return (
    <div className="App">
      {/* BEM convention of Naming */}
      <header className="App-header">
        <Header />
        <Home />
      </header>
    </div>
  );
}

export default App;
