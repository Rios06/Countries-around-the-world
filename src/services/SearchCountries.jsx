
//BUSCAR PAIS
import { useState } from 'react';
import useCountryData from './useCountryData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export const SearchCountries = () => {
  const { country, setCode } = useCountryData();
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setCode(inputValue.toUpperCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search">
      <div className="content-search">
        <h1>Countries around the world</h1>
        <div className="search-container">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} id="searchCountryIcon" />
            <input
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              maxLength={2}
              placeholder="Search country by code"
            />
          </div>
          <button onClick={handleClick}>Search country</button>
        </div>
        {country && Object.keys(country).length > 0 && (
          <article>
            <ul id="dataCountry">
              <li>Code: {country.code}</li>
              <li>Name: {country.name}</li>
              <li>Capital: {country.capital}</li>
              <li>Continent: {country.continent && country.continent.name}</li>
              <li>Currency: {country.currency}</li>
              <li>Languages: {country.languages && country.languages.map(lang => lang.name).join(', ')}</li>
            </ul>
          </article>
        )}
        {!country && inputValue && (
          <p>There is no country with that code</p>
        )}
      </div>
    </div>
  );
};

export default SearchCountries;