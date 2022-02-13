import React from "react";
import {isMobile} from 'react-device-detect';
import ReactCountryFlag from "react-country-flag";
import { FaPlay, FaRegCopy, FaHeart } from "react-icons/fa";
import { BsCollectionPlay } from "react-icons/bs";
import { copyToClipboard } from "../common";
import { errorNotification, darkNotification } from "../common/notification";
import { fixAllFlags } from "../common/components";

const notifyCopy = (url, e) => {
    e.preventDefault();
    copyToClipboard(url);
    darkNotification("URL copied successfully!");
};

const notifyWarn = () => errorNotification("This channel is already available in your playlist!");
const notifyAdd = () => darkNotification("Channel added successfully to your playlist!");

const handleStoreChannel = (item, e) => {
    e.preventDefault();
    const getPlaylist = localStorage.getItem("playlist");
    const checkDuplicates = (playList) =>
      playList.find((channel) => channel.url === item.url);
    if (getPlaylist) {
      const playList = JSON.parse(getPlaylist);
      if (checkDuplicates(playList)) {
        notifyWarn();
      } else {
        const revisedPlaylist = playList.concat(item);
        const sortedPlaylist = revisedPlaylist.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        localStorage.setItem("playlist", JSON.stringify(sortedPlaylist));
        notifyAdd();
      }
    } else {
      const newPlaylist = [];
      const revisedPlaylist = newPlaylist.concat(item);
      localStorage.setItem("playlist", JSON.stringify(revisedPlaylist));
      notifyAdd();
    }
};

const Toggle = ({ url, title, country }) => (
  <div>
      <table className="table">
      <thead className="thead">
        <tr>
          <th>Channel</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr>
            <td>
                <div className="card-name">
                    <div className="accordion__flag">
                        {fixAllFlags(country)}
                        {/* {country !== null &&
                        country !== "Netherlands Antilles" ? (
                            <ReactCountryFlag
                                className="accordion__flag__img accordion__flag__img-cover"
                                svg
                                countryCode={country}
                            />
                        ) : (
                            fixBrokenFlags(country)
                        )} */}
                    </div>
                    <div className="title" title={title}>
                        <span>{title}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="controls">
                    {isMobile && (
                        <a
                            href="#"
                            // onClick={(e) => handlePlay(url, e)}
                            aria-label="Play"
                            title={url}
                        >
                            <FaPlay />
                        </a>
                    )}
                    <a
                        title={url}
                        href={`http://yielding-meeting.surge.sh/?url=${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Alternate Play option"
                    >
                        <BsCollectionPlay />
                    </a>
                    <a
                        href="#" 
                        onClick={(e) => notifyCopy(url, e)}
                    >
                        <FaRegCopy />
                    </a>
                    <a
                        href="#"
                        onClick={(e) => handleStoreChannel({ title, url }, e)}
                        aria-label="Add to my playlist"
                    >
                        <FaHeart />
                    </a>
                </div>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Toggle;
