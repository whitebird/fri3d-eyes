import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Pixel from "./Pixel";

const styles = {
  root: {}
};

class Grid extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, side, values, previousValues, setPixel, onion } = this.props;

    const pixels = new Array(7 * 5).fill().map((_, i) => {
      const x = i % 7;
      const y = Math.floor(i / 7);
      const active = values[y][x];
      const previousActive = onion && previousValues[y][x]
      return (
        <Pixel
          key={`${side}pixel${i}`}
          x={x}
          y={y}
          side={side}
          setPixel={setPixel}
          active={active}
          previousActive={previousActive}
        />
      );
    });
    let transform = "translate(2,0)";
    if (side === "right") {
      transform = "translate(282,-2)";
    }
    return (
      <g className={classes.root} transform={transform}>
        {pixels}
      </g>
    );
  }
}

export default withStyles(styles)(Grid);
