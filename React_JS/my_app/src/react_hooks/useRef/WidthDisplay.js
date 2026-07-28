import React, { useRef, useState } from "react";

function WidthDisplay() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  const showWidth = () => {
    setWidth(divRef.current.offsetWidth);
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "300px",
          height: "100px",
          backgroundColor: "lightblue",
          border: "2px solid black",
          marginBottom: "10px",
        }}
      >
        This is a div
      </div>

      <button onClick={showWidth}>Show Width</button>

      <h3>Width: {width}px</h3>
    </div>
  );
}

export default WidthDisplay;