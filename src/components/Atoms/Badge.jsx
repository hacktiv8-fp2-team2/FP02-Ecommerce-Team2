import React from "react";
import propTypes from "prop-types";

const Badge = (props) => {
  const className = ["button"];
  if (props.badgePrimary)
    className.push("badge badge-primary badge-outline p-2 w-[auto] h-[30px]");
  return <div className={className.join(" ")}>{props.children}</div>;
};

Badge.propTypes = {
  badgePrimary: propTypes.bool,
};

export default Badge;
