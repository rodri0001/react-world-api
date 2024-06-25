import CountryItem from "./CountryItem";
import BackBtn from "../../ui/BackBtn";

function Country() {
  return (
    <div className="primaryContainer grid grid-rows-[auto_1fr]">
      <BackBtn />
      <div className="grid gap-10 md:gap-4 lg:grid-cols-2">
        <CountryItem />
      </div>
    </div>
  );
}

export default Country;
