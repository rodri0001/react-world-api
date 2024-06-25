import Box, { Label } from "./Box";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { useApp } from "../context/useApp";

import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <>
      <SearchBar />
      <DisplayCountry />
    </>
  );
}

function DisplayCountry() {
  const { isLoading, displayedCountries } = useApp();

  return (
    <div className="displayCountry primaryContainer">
      {displayedCountries.map((country, index) =>
        isLoading ? (
          <Skeleton
            key={index}
            variant="rectangular"
            height={200}
            className="rounded-md"
            animation="wave"
          />
        ) : (
          <Country country={country} key={index} />
        )
      )}
    </div>
  );
}

function Country({ country }) {
  const COUNTRY_NAME = country.name.common;
  const COUNTRY_FLAG = country.flags.png;
  const COUNTRY_POPULATION = country.population.toLocaleString();
  const COUNTRY_REGION = country.region;
  const COUNTRY_CAPITAL = country?.capital
    ? country?.capital.join(", ")
    : "No Capital";

  return (
    <div className="bg-white rounded-md shadow-xl shadow-stone-600/10 dark:shadow-stone-800/80 dark:bg-dark-blue">
      <Link to={`country/${COUNTRY_NAME}`}>
        <img
          className="w-full min-h-[150px] h-40 mobile:h-[220px] sm:h-48 sm:w-96 rounded-t-md"
          src={COUNTRY_FLAG}
          alt={COUNTRY_NAME}
        />
      </Link>

      <div className="w-full p-6 pb-10 rounded-md ">
        <h1 className="pb-2 text-very-dark-blue-text dark:text-white text-[19px] font-800">
          <Link to={`country/${COUNTRY_NAME}`}>{COUNTRY_NAME}</Link>
        </h1>
        <Box>
          <Label bold>Population:</Label>
          <Label lighter>{COUNTRY_POPULATION}</Label>
        </Box>

        <Box>
          <Label bold>Region:</Label>
          <Label lighter>{COUNTRY_REGION}</Label>
        </Box>

        <Box>
          <Label bold>Capital:</Label>
          <Label lighter>{COUNTRY_CAPITAL}</Label>
        </Box>
      </div>
    </div>
  );
}
