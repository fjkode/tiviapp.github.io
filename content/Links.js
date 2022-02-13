import React from "react";
import { FaChild } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <a
        className="children"
        href="https://www.savethechildren.org/us/ways-to-help"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Help make a difference in a child's life"
        title="Help make a difference in a child's life"
      >
        <FaChild />
      </a>
      <span className="version">v2.0</span>
    </>
  );
};

export default Links;
