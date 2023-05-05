import "../../src/header.css";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
function Header(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary check"
        style={{ display: "contents" }}
      >
        <div className="container-fluid cf" style={props.style1}>
          <Link className="navbar-brand" to="/" style={props.style1}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={props.style1}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={props.style1}>
                  About
                </Link>
              </li>
            </ul>
            <div className="container mx-2" style={{ display: "contents" }}>
              <input
                className="form-input"
                type="color"
                name="clr"
                id="color"
                onChange={props.getColor}
              />
              <label className="form-check-label mx-2">change theme</label>
              <div
                className="mx-3"
                style={{
                  borderLeft: "3px solid grey ",
                  height: "25px",
                  left: "50%",
                }}
              ></div>
              <div className="d-flex">
                <div
                  className="mx-2"
                  style={{
                    cursor: "pointer",
                    background: "blue",
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                    border: "1px solid",
                  }}
                  onClick={() => {
                    props.onToggle("primary");
                  }}
                ></div>
                <div
                  className="mx-2"
                  style={{
                    cursor: "pointer",
                    background: "green",
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                    border: "1px solid",
                  }}
                  onClick={() => {
                    props.onToggle("success");
                  }}
                ></div>
                <div
                  className="mx-2"
                  style={{
                    cursor: "pointer",
                    background: "yellow",
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                    border: "1px solid",
                  }}
                  onClick={() => {
                    props.onToggle("warning");
                  }}
                ></div>
                <div
                  className="mx-2"
                  style={{
                    cursor: "pointer",
                    background: "red",
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                    border: "1px solid",
                  }}
                  onClick={() => {
                    props.onToggle("danger");
                  }}
                ></div>
                <div
                  className="mx-2"
                  style={{
                    cursor: "pointer",
                    background: "pink",
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                    border: "1px solid",
                  }}
                  onClick={() => {
                    props.onToggle("secondary");
                  }}
                ></div>
              </div>
              <div
                className="mx-3"
                style={{
                  borderLeft: "3px solid grey ",
                  height: "25px",
                  left: "50%",
                }}
              ></div>
              <div className="d-flex mx-1">
                <div className="mx-2">
                  {props.checked ? (
                    <button
                      onClick={() => {
                        props.onToggleMode();
                      }}
                    >
                      <NightlightIcon />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.onToggleMode();
                      }}
                    >
                      <LightModeIcon />
                    </button>
                  )}
                </div>
                <div className="mx-2"></div>
              </div>
              {/* <h5 className="mx-3">
                  enable {`${props.checked ? "Dark" : "light"}`} mode
                </h5>

                <ReactSwitch
                  checked={props.checked}
                  onChange={props.onToggle}
                /> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;

// //today's task(4/23)
// MongoDB
// ->Fixing the problem to install MongoDB
// ->Install the mongo compass tool
// Node js
// ->Work on middleware
// Reactjs
// ->Fix the bug of local host project text utils
// ->adding some functionlity text utils
// js
// ->Strict mode
