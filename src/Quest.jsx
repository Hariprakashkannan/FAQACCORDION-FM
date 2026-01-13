import { useState } from "react";
import "./Quest.css";                   //CHILD COMPONENT


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
          <h3>{props.data.ques}</h3>

          <img
            src={first == "hide" ? "./plus.svg" : "./minus.svg"}
            alt="ICON"
            onClick={handleClick}
          />
        </div>

      </div>
    <div>

      {first === "show" &&  <p>{props.data.answer}</p> }
       </div>
        
    </>
  );
};

export default Quest;












