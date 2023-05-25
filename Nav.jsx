export default function Nav(props) {
  return (
    <>
      <nav className={props.darkMode ? "dark" : ""}>

        <img className="nav-logo-icon" src="src/images/react-logo.png" alt="react" />

        <h3 className="nav-logo">ReactFacts</h3>

       <div className="toggler">
        <p className="toggler-light">Light</p>
        <div className="toggler-slider" onClick={props.toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
       </div>
      </nav>
    </>
  );
}
