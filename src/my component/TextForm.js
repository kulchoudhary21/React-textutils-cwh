import { useState } from "react";
function TextForm(props) {
  const [text, setText] = useState("");
  let eventHandle = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  let handleOnlower = () => {
    let t = text.toLowerCase();
    setText(t);
    let type = "success";
    let msg = "Converto lower case";
    props.showAlert(msg, type);
  };
  let handleOnClick = () => {
    let t = text.toUpperCase();
    setText(t);
    let type = "success";
    let msg = "Converto upper case";
    props.showAlert(msg, type);
  };
  let handleOnclear = () => {
    setText("");
    let type = "success";
    let msg = "Cleared";
    props.showAlert(msg, type);
  };
  let handleOnremoveSpace = () => {
    let temp = text.replace(/\s+/g, " ").trim();
    let type = "success";
    let msg = "Remove unwanted spaces";
    props.showAlert(msg, type);
    setText(temp);
  };
  let handleOnCopy = () => {
    let text = document.getElementById("text");
    text.select();
    document.execCommand("copy");
    let type = "success";
    let msg = "Text copied";
    props.showAlert(msg, type);
  };
  return (
    <div
      className="container my-3"
      style={{ color: props.style1.color == "black" ? "black" : "white" }}
    >
      <div className="mx" style={{ width: "70%" }}>
        <h4>
          <label className="form-label">{props.label}</label>
        </h4>
        <textarea
          className="form-control mb-3"
          placeholder={text}
          id="text"
          value={text}
          rows={10}
          onChange={eventHandle}
          style={{
            backgroundColor:
              props.style1.backgroundColor == "black" ? "grey" : "white",
            color: props.style1.color == "black" ? "black" : "white",
          }}
        ></textarea>
        <button
          type="submit"
          onClick={handleOnClick}
          ConvertUppercase
          className="btn btn-primary mx-2 my-2"
          style={{backgroundColor:`${props.colortheme}`}}
        >
          Convert uppercase
        </button>
        <button
          type="submit"
          onClick={handleOnlower}
          style={{backgroundColor:`${props.colortheme}`}}
          className="btn btn-primary mx-2 my-2"
        >
          Convert Lowercase
        </button>
        <button
          type="submit"
          onClick={handleOnclear}
          className="btn btn-primary mx-2 my-2"
          style={{backgroundColor:`${props.colortheme}`}}
        >
          Clear
        </button>
        <button
          type="submit"
          onClick={handleOnremoveSpace}
          className="btn btn-primary mx-2 my-2"
          style={{backgroundColor:`${props.colortheme}`}}
        >
          Remove Extra space
        </button>
        <button
          type="submit"
          onClick={handleOnCopy}
          className="btn btn-primary mx-2 my-2"
          style={{backgroundColor:`${props.colortheme}`}}
        >
          Copy
        </button>
        
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>time taken to read the {0.008 * (text.split(" ").length-1)} minutes</p>
        <h4>Preview</h4>
        <h6>{text}</h6>
      </div>
    </div>
  );
}
export default TextForm;
