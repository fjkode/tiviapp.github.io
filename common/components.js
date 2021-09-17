import ReactCountryFlag from "react-country-flag";
import { randomNumbers } from "../common";

const returnFlag = (code) => (
  <ReactCountryFlag className="accordion__flag__img" svg countryCode={code} />
);

const fixBrokenFlags = (country) => {
  if (country.trim().toLowerCase().includes("us_")) return returnFlag("us");
  if (country.trim().toLowerCase().includes("uk_")) return returnFlag("gb");
  if (country.trim().toLowerCase().includes("se_")) return returnFlag("se");
  if (country.trim().toLowerCase().includes("no_")) return returnFlag("no");
  if (country.trim().toLowerCase().includes("nl_")) return returnFlag("nl");
  if (country.trim().toLowerCase().includes("mx_")) return returnFlag("mx");
  if (country.trim().toLowerCase().includes("it_")) return returnFlag("it");
  if (country.trim().toLowerCase().includes("in_")) return returnFlag("in");
  if (country.trim().toLowerCase().includes("ie_")) return returnFlag("ie");
  if (country.trim().toLowerCase().includes("fr_")) return returnFlag("fr");
  if (country.trim().toLowerCase().includes("fi_")) return returnFlag("fi");
  if (country.trim().toLowerCase().includes("es_")) return returnFlag("es");
  if (country.trim().toLowerCase().includes("dk_")) return returnFlag("dk");
  if (country.trim().toLowerCase().includes("de_")) return returnFlag("de");
  if (country.trim().toLowerCase().includes("ch_")) return returnFlag("ch");
  if (country.trim().toLowerCase().includes("cd")) return returnFlag("cg");
  if (country.trim().toLowerCase().includes("ca_")) return returnFlag("ca");
  if (country.trim().toLowerCase().includes("br_")) return returnFlag("br");
  if (country.trim().toLowerCase().includes("be_")) return returnFlag("be");
  if (country.trim().toLowerCase().includes("au_")) return returnFlag("au");
  if (country.trim().toLowerCase().includes("at_")) return returnFlag("at");
  if (country === "ve") return returnFlag("ve");
  return (
    <img
      className="accordion__flag__img"
      src={`http://placekitten.com/${randomNumbers(60, 80)}/44`}
    />
  );
};

export { fixBrokenFlags };
