import lookup from "country-code-lookup";
import { getChannelUrls, parseXLinks, getTextFromFetch } from "../common";
import React, { useState, useEffect } from "react";
import RLoading from "react-loading";
import MenuContext from "../context/MenuContext";
import { useDarkMode } from "../common/useDarkMode";
import Menu from "../components/Menu";
import Main from "../components/Main";

const App = ({ listing }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [showFaq, setShowFaq] = useState(false);
  const [showList, setShowList] = useState(false);
  const [channel, setChannel] = useState({
    url: null,
    urls: null,
    keyword: "",
  });
  const { urls } = channel;
  const handleShowFaq = (e) => {
    e.preventDefault();
    setShowFaq(true);
  };
  const handleShowList = (e) => {
    e.preventDefault();
    setShowList(true);
  };
  if (process.browser && theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
  if (process.browser && theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  useEffect(async () => {
    const parser = new DOMParser();
    const document = parser.parseFromString(listing, "text/html");
    const countries = Array.from(
      document.querySelectorAll('.js-navigation-open[title*=".m3u"]')
    ).map((i) => i.textContent.replace(".m3u", ""));

    const urls = getChannelUrls(countries);
    const promises = urls.map(getTextFromFetch);
    const results = await Promise.all(promises);
    const mainList = await parseXLinks(results, countries);

    const myCTitle = (i) =>
      lookup.byInternet(i[0].country.toUpperCase()) !== null
        ? lookup.byInternet(i[0].country.toUpperCase()).country
        : i[0].country;

    const finalList = await mainList
      .filter((i) => i.length)
      .map((i, idx) => {
        return {
          id: ++idx,
          cTitle: myCTitle(i),
          code: lookup.byInternet(i[0].country.toUpperCase()) || null,
          content: [...i],
        };
      });

    setChannel({
      ...channel,
      url: null,
      urls: finalList,
      keyword: "",
    });
  }, []);
  useEffect(() => {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
  if (urls === null)
    return (
      <div className="loading">
        <RLoading />
      </div>
    );
  return (
    <>
      <MenuContext.Provider
        value={{
          channel,
          theme,
          toggleTheme,
          showFaq,
          showList,
          setChannel,
          setShowFaq,
          setShowList,
          handleShowFaq,
          handleShowList,
        }}
      >
        <Menu />
        <Main />
      </MenuContext.Provider>
    </>
  );
};

export default App;
