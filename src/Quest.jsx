import { useState } from "react";
import "./Quest.css";

const Quest = (props) => {
  let [first, setfirst] = useState("hide");

  function handleClick() {
    if (first == "hide") {
      setfirst("show");
    } else {
      setfirst("hide");
    }
  }

  return (
    <>
      <div className="quest-container">
        <div className="heading">
          <h3>{props.question}</h3>

          <img
            src={first == "hide" ? "./plus.svg" : "./minus.svg"}
            alt="ICON"
            onClick={handleClick}
          />
        </div>

      </div>
      <div>
        <p className={first}>{props.ans}</p><br />
        </div>
        
    </>
  );
};

export default Quest;
