import { useState } from "react";
import Output from "./Output";

const Greeting = () => {

  const [changedText, setChangedText] = useState();

  function changeText(){
 setChangedText(true);
  };

  return(
    <div>
    <h2>Hello World</h2>
   {!changedText && <Output>
      good to see you
    </Output> }
    {changedText && <Output>
      See you later
    </Output> }
    <button onClick={changeText}>Change Text!</button>
  </div>
  )
}

export default Greeting;
