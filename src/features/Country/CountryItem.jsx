import { useApp } from "../../context/useApp";
import Box, { Label } from "../../ui/Box";

function CountryItem() {
  const {
    COUNTRY_NAME,
    COUNTRY_OFFICIAL_NAME,
    COUNTRY_FLAG,
    COUNTRY_POPULATION,
    COUNTRY_REGION,
    COUNTRY_SUB_REGION,
    COUNTRY_CAPITAL,
    COUNTRY_TLD,
    COUNTRY_LANGUAGES,
    COUNTRY_CURRENCIES,
  } = useApp();

  return (
    <>
      <img
        className="w-full px-2 mx-auto lg:mx-0 max-h-[250px] sm:h-full sm:p-0 sm:w-4/5"
        src={COUNTRY_FLAG}
        alt={COUNTRY_NAME}
      />

      <div className="py-5 mb-20 sm:mb-0 h-fit">
        <h1 className="text-3xl pb-7 md:pb-0 font-800 dark:text-white text-very-dark-blue-text">{COUNTRY_NAME}</h1>
        <div className="flex flex-col gap-10 sm:gap-16 lg:gap-8 sm:flex-row md:gap-18 text-very-dark-blue-text">
          <div className="countryDetails">
            <Box>
              <Label className="bg-red-400" bold>
                Native Name:
              </Label>
              <Label lighter>{COUNTRY_OFFICIAL_NAME}</Label>
            </Box>
            <Box>
              <Label bold>population:</Label>
              <Label lighter>{COUNTRY_POPULATION}</Label>
            </Box>
            <Box>
              <Label bold>region:</Label>
              <Label lighter>{COUNTRY_REGION}</Label>
            </Box>
            <Box>
              <Label bold>Sub Region:</Label>
              <Label lighter>{COUNTRY_SUB_REGION}</Label>
            </Box>
            <Box>
              <Label bold>capital:</Label>
              <Label lighter>{COUNTRY_CAPITAL}</Label>
            </Box>
          </div>

          <div className="countryDetails">
            <Box>
              <Label bold>Top Level Domain:</Label>
              <Label lighter>{COUNTRY_TLD}</Label>
            </Box>

            <Box>
              <Label bold>Currencies:</Label>
              <Label lighter>{COUNTRY_CURRENCIES}</Label>
            </Box>

            <Box>
              <Label bold>Languages:</Label>
              <Label lighter>{COUNTRY_LANGUAGES}</Label>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryItem;
