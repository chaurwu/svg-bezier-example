import React from "react";

const SmallHandle = ({ coordinates, onMouseDown }) => (
    <ellipse
      cx={coordinates.x}
      cy={coordinates.y}
      rx={8}
      ry={8}
      fill="rgb(255, 255, 255)"
      stroke="rgb(244, 0, 137)"
      strokeWidth={2}
      onMouseDown={onMouseDown}
      style={{ cursor: '-webkit-grab' }}
    />
  );

export default SmallHandle;