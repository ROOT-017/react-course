import React, { useState } from "react";
import Output from "./Output";
const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <>
      <div>Hello World</div>
      {!changedText && (
        <Output>
          <div>Life's Good by LG</div>
        </Output>
      )}
      <button onClick={changeTextHandler}>Click Me!</button>
    </>
  );
};

export default Greeting;
