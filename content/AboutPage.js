import React from "react";
import { FaList, FaHeart } from "react-icons/fa";
import { BsShuffle, BsCollectionPlay } from "react-icons/bs";

const AboutPage = () => {
  return (
    <ul className="modal__ul">
      <li>
        Jackal is a few lines of open source code written in JavaScript that
        beautifies data present in{" "}
        <a
          href="https://github.com/iptv-org/iptv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>IPTV</strong>
        </a>{" "}
        repository.
      </li>
      <li>
        Powered by{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <strong>Next</strong>
        </a>
        ,{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>React</strong>
        </a>
        . Hosted on&nbsp;
        <a href="https://surge.sh/" target="_blank" rel="noopener noreferrer">
          <strong>Surge</strong>
        </a>
        . Huge thanks to&nbsp;
        <a
          href="https://www.npmjs.com/package/country-code-lookup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>country-code-lookup</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-country-flag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-country-flag</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-icons</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-device-detect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-device-detect</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-loading"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-loading</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-toastify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-toastify</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-modal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-modal</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-countup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-countup</strong>
        </a>
        ,&nbsp;
        <a
          href="https://www.npmjs.com/package/react-accessible-accordion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>react-accessible-accordion</strong>
        </a>
        &nbsp;libraries.
      </li>
      <li className="li li--flex">
        <span>To check available channels, use:</span>
        <FaList />
      </li>
      <li className="li li--flex">
        <span>To view a random channel, use:</span>
        <BsShuffle />
      </li>
      <li className="li li--flex">
        <span>To view or add channels to your playlist, use:</span>
        <FaHeart />
      </li>
      <li className="li li--flex">
        <cite>v3.0 : &copy; {new Date().getFullYear()}</cite>
      </li>
    </ul>
  );
};

export default AboutPage;
