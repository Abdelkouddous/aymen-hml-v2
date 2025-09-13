// src/components/Projects/NavigationArrow.js

import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { styles } from "./styles";

export const NavigationArrow = ({ direction, ...buttonProps }) => {
  const path =
    direction === "prev"
      ? "M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"
      : "M512 256L270 42.6v138.2H0v150.6h270v138z";
  // Add button props so the button works when we click on it
  return (
    <Button
      {...buttonProps}
      style={styles.buttonStyle}
      className="nav-arrow-btn"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      title={direction === "prev" ? "Previous" : "Next"}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d={path} />
      </svg>
    </Button>
  );
};

NavigationArrow.propTypes = {
  direction: PropTypes.oneOf(["prev", "next"]).isRequired,
};
