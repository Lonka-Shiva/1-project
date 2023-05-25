import React from "react";
import Nav from "./Nav";
import Main2 from "./Main2";

export default function App() {

  const [darkMode, setDarkMode] = React.useState(true)

function toggleDarkMode(){
  setDarkMode(prevMode => !prevMode)
}

  return (
    <>
    <div className="container">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>  
      <Main2 darkMode={darkMode} />
      </div>
    </>
  );
}
