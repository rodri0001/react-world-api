import { FaSistrix } from "react-icons/fa6";
import Select from "react-select";

import { useApp } from "../context/useApp";
import { useOutletContext } from "react-router";

const worldRegions = [
  { label: "All Regions" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
];

export default function SearchBar({ theme }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 py-6 sm:gap-4 sm:py-8 primaryContainer">
      <SearchBox />
      <SelectBox theme={theme} />
    </div>
  );
}

function SearchBox() {
  const { searchQuery, handleSearchChange } = useApp();

  return (
    <div className="w-full shadow-md dark:bg-dark-blue shadow-stone-500/10 dark:shadow-stone-800/80 inputField sm:w-2/5">
      <FaSistrix className="text-2xl cursor-pointer dark:text-white text-dark-gray" />
      <input
        className="w-full bg-white dark:text-dark-input placeholder:text-dark-gray dark:placeholder:text-dark-input dark:bg-dark-blue text-md"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

function SelectBox() {
  const { selectedRegion, handleSelectChange } = useApp();
  const [theme] = useOutletContext();

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      width: 220,
      fontSize: "15px",
      padding: "0.6rem 1rem",
      border: "none",
      transition: "none",
      cursor: "pointer",
      backgroundColor: theme === "dark" ? "hsl(209, 23%, 22%)" : "white",
      boxShadow:
        theme !== "dark"
          ? "0 4px 6px -1px rgb(120 113 108 / 0.1), 0 2px 4px -2px rgb(120 113 108 / 0.1)"
          : "0 4px 6px -1px rgb(41 37 36 / 0.8), 0 2px 4px -2px rgb(41 37 36 / 0.8)",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      padding: "10px 1rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "hsl(0, 0%,85%)" : "hsl(0, 0%, 52%)",
      fontWeight: "600",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme === "dark" ? "hsl(0, 0%,85%)" : "hsl(0, 0%, 52%)",
      fontWeight: "600",
    }),
  };

  return (
    <Select
      isSearchable={false}
      className="rounded-md"
      styles={customSelectStyles}
      value={selectedRegion}
      onChange={handleSelectChange}
      options={worldRegions}
      placeholder="Filter by Region"
    />
  );
}
