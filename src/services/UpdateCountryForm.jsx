import { useState } from "react";

export const UpdateCountryForm = () => {
  const [country, setCountry] = useState({});
  const [inputValue, setValue] = useState("");

  const handleClick = () => {
    try {
      fetch(`http://localhost:3000/country/country/${inputValue}`)
        .then((response) => response.json())
        .then((data) => setCountry(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDelete = () => {
    try {
      fetch(`http://localhost:3000/country/country/${inputValue}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    try {
      fetch(`http://localhost:3000/country/country/${inputValue}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(country),
      })
        .then((response) => response.json())
        .then((data) => setCountry(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newName = name === "name" ? value : country.name;
    const newCapital = name === "capital" ? value : country.capital;
    const newContinent = name === "continent" ? value : country.continent;
    const newCurrency = name === "currency" ? value : country.currency;
    const newLanguages = name === "languages" ? value : country.languages;

    setCountry({
      code: country.code,
      name: newName,
      capital: newCapital,
      continent: newContinent,
      currency: newCurrency,
      languages: [...country.languages, newLanguages],
    });
  };

  console.log(country);

  return (
    <>
      <section className="section-update">
        <h1>
          Update <span>Country</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed rerum
          sapiente cumque ducimus autem in, quos voluptatem
        </p>
        <section className="container-update">
          <input
            type="text"
            placeholder="Code"
            onBlur={(e) => setValue(e.target.value)}
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            defaultValue={country.name}
            onBlur={handleChange}
          />
          <input
            name="capital"
            type="text"
            placeholder="Capital"
            defaultValue={country.capital}
            onBlur={handleChange}
          />
          <input
            name="continent"
            type="text"
            placeholder="Continent"
            defaultValue={country.continent?.name}
            onBlur={handleChange}
          />
          <input
            name="currency"
            type="text"
            placeholder="Currency"
            defaultValue={country.currency}
            onChange={handleChange}
          />
          <input
            name="languages"
            type="text"
            placeholder="Languages"
            defaultValue={country?.languages?.[0]?.name || ""}
            onBlur={handleChange}
          />
        </section>
        <div className="button-update">
          <button onClick={handleClick}>Consult</button>
          <button onClick={handleUpdate}>update country</button>
          <button onClick={handleClickDelete}>delete country</button>
        </div>
      </section>
    </>
  );
};




