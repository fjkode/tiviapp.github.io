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
      <a
        // href="http://jackal.surge.sh/report.html"
        href="https://github.com/tpkahlon/jackal/blob/main/CHANGELOG.md"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check latest version metrics"
        title="Check latest version metrics"
      >
        v1.15
      </a>
    </>
  );
};

export default Links;
