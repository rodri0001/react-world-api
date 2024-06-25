import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";

export const AppContext = createContext();

const API_BASE = "https://restcountries.com/v3.1/all";

function AppProvider({ children }) {
  // === FETCH DATA ===
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // THE LOADING FUNCTIONALITY ISN'T WORKING WELL SO.. A TIMEOUT WILL HELP
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // FETCHING COUNTRIES DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE);
        if (!response.ok) {
          throw new Error("Check Your Network Connection");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // === FILTER COUNTRIES BY THE SEARCHBAR ===
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the countries based on the search query
    const filteredCountries = data.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );

    setFilteredCountries(filteredCountries);
  };

  // === FILTER COUNTRIES BY THE REGION ===
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleSelectChange = (selectedOption) => {
    !selectedOption.value
      ? setSelectedRegion(null)
      : setSelectedRegion(selectedOption);
  };

  // === DISPLAYED COUNTRIES ===
  const displayedCountries = (
    searchQuery.length > 0 ? filteredCountries : data
  ).filter((country) =>
    selectedRegion ? country.region === selectedRegion.value : filteredCountries
  );

  // ===== RETRIEVE AND SEND DATA BASED ON THE SEARCHED COUNTRY =====
  const { name } = useParams();

  const countryName = name !== undefined && String(name);

  let formattedName = countryName
    ?.toString()
    .replace(/\s+/g, "")
    .toLocaleLowerCase();

  const CountryObject = data.find(
    (country) =>
      country.name.common.replace(/\s+/g, "").toLocaleLowerCase() ===
      formattedName
  );

  // COUNTRY NAME
  let COUNTRY_NAME = CountryObject?.name?.common;

  // OFFICIAL NAME
  let COUNTRY_OFFICIAL_NAME = CountryObject?.name?.official;

  // COUNTRY FLAG
  let COUNTRY_FLAG = CountryObject?.flags?.svg;

  // POPULATION
  let COUNTRY_POPULATION = CountryObject?.population?.toLocaleString();

  // REGION
  let COUNTRY_REGION = CountryObject?.region;

  // SUB_REGION
  let COUNTRY_SUB_REGION = CountryObject?.subregion;

  // CAPITAL
  let COUNTRY_CAPITAL = CountryObject?.capital
    ? CountryObject?.capital.join(", ")
    : "No Capital";

  // TLD
  let COUNTRY_TLD = CountryObject?.tld.join(" | ");

  // CURRENCIES
  let COUNTRY_CURRENCIES = "";
  for (const currencyCode in CountryObject?.currencies) {
    const currency = CountryObject?.currencies[currencyCode];
    COUNTRY_CURRENCIES += `${currency.name} (${currencyCode}) - `;
  }
  COUNTRY_CURRENCIES = COUNTRY_CURRENCIES.slice(0, -2);

  // LANGUAGES
  let COUNTRY_LANGUAGES = "";
  for (let languages in CountryObject?.languages) {
    const language = CountryObject?.languages[languages];
    COUNTRY_LANGUAGES += `${language}, `;
  }
  COUNTRY_LANGUAGES = COUNTRY_LANGUAGES.slice(0, -2);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        data,
        handleSearchChange,
        searchQuery,
        filteredCountries,
        selectedRegion,
        handleSelectChange,
        displayedCountries,

        COUNTRY_NAME,
        COUNTRY_OFFICIAL_NAME,
        COUNTRY_FLAG,
        COUNTRY_POPULATION,
        COUNTRY_REGION,
        COUNTRY_SUB_REGION,
        COUNTRY_CAPITAL,
        COUNTRY_TLD,
        COUNTRY_CURRENCIES,
        COUNTRY_LANGUAGES,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
