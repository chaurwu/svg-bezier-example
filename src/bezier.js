import React from "react";
import ConnectingLine from './line';
import LargeHandle from './large-handle';
import SmallHandle from './small-handle';

class Bezier extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        startPoint: { x: 10, y: 10 },
        controlPoint: { x: 190, y: 100},
        endPoint: { x: 10, y: 190 },
        draggingPointId: null,
    }
  }

  handleMouseDown(pointId) {
    this.setState({ draggingPointId: pointId });
  }

  handleMouseUp() {
    this.setState({ draggingPointId: null });
  }

  handleMouseMove({ clientX, clientY }) {
    const { viewBoxWidth, viewBoxHeight } = this.props;
    const { draggingPointId } = this.state;

    if (!draggingPointId) {
        return;
    }

    const svgRect = this.node.getBoundingClientRect();
    const svgX = clientX - svgRect.left;
    const svgY = clientY - svgRect.top;

    const viewBoxX = svgX * viewBoxWidth / svgRect.width;
    const viewBoxY = svgY * viewBoxHeight / svgRect.height;

    this.setState({
        [draggingPointId]: { x: viewBoxX, y: viewBoxY },
    });
  }

  render() {
    const { viewBoxWidth, viewBoxHeight } = this.props;
    const {
      startPoint,
      controlPoint,
      endPoint,
    } = this.state;
    
    const instructions = `
      M ${startPoint.x},${startPoint.y}
      Q ${controlPoint.x},${controlPoint.y}
        ${endPoint.x},${endPoint.y}
    `;

    return (
      <svg ref={node => (this.node = node)} width="100%" height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          onMouseMove={ev => this.handleMouseMove(ev)}
          onMouseUp={() => this.handleMouseUp()}
          style={{ overflow: 'visible' }}>
        <ConnectingLine
          from={startPoint}
          to={controlPoint}
        />
        <ConnectingLine from={controlPoint} to={endPoint} />

        <path
          d={instructions}
          fill="none"
          stroke="rgb(213, 0, 249)"
          strokeWidth={5}
        />

         <LargeHandle
          coordinates={startPoint}
          onMouseDown={() =>
            this.handleMouseDown('startPoint')
          }
        />

        <LargeHandle
          coordinates={endPoint}
          onMouseDown={() =>
            this.handleMouseDown('endPoint')
          }
        />

        <SmallHandle
          coordinates={controlPoint}
          onMouseDown={() =>
            this.handleMouseDown('controlPoint')
          }
        />
      </svg>
    )
  }
}

export default Bezier;