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
      })
        .then((response) => response.json())
        .then((data) => setCountry(data));
    } catch (error) {
      console.log(error);
    }
  };

  

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
          <input type="text" placeholder="Name" defaultValue={country.name} />
          <input
            type="text"
            placeholder="Capital"
            defaultValue={country.capital}
          />
          <input
            type="text"
            placeholder="Continent"
            defaultValue={country.continent?.name}
          />
          <input
            type="text"
            placeholder="Currency"
            defaultValue={country.currency}
          />
          <input
            type="text"
            placeholder="Languages"
            defaultValue={country?.languages?.[0]?.name || ""}
          />
        </section>
        <div className="button-update">
          <button onClick={handleClick}>Consult</button>
          <button>update country</button>
          <button onClick={handleClickDelete}>delete country</button>
        </div>
      </section>
    </>
  );
};
