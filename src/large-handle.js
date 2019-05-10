import React from "react";

const LargeHandle = ({ coordinates, onMouseDown }) => (
    <ellipse
      cx={coordinates.x}
      cy={coordinates.y}
      rx={15}
      ry={15}
      fill="rgb(244, 0, 137)"
      onMouseDown={onMouseDown}
      style={{ cursor: '-webkit-grab' }}
    />
  );
  
export default LargeHandle;