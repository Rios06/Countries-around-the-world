<<<<<<< HEAD
import { useState } from 'react';
import axios from 'axios';

export const UpdateCountryForm = (props) => {
  const countryCode = props.countryCode;
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    capital: '',
    continent: '',
    currency: '',
    languages: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/country/countries/${countryCode}`, formData);
      setMessage('Country updated successfully.');
      console.log('Country updated:', response.data);
    } catch (error) {
      setError('Failed to update country. Please try again later.');
      console.error('Error updating country:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/country/countries/${countryCode}`);
      setMessage('Country deleted successfully.');
      console.log('Country deleted:', response.data);
    } catch (error) {
      setError('Failed to delete country. Please try again later.');
      console.error('Error deleting country:', error);
    }
  };

  return (
    <>
      <section className="section-update">
        <h1>Update <span>Country</span> </h1>
        {message && <div className="message">{message}</div>}
        {error && <div className="error">{error}</div>}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sed rerum sapiente cumque ducimus autem in, quos voluptatem
        </p>
        <section className="container-update">
          <input type="text" name="code" placeholder="Code" value={formData.code} onChange={handleChange} />
          <input type="text" name="name" placeholder="Name" value={formData.name} disabled />
          <input type="text" name="capital" placeholder="Capital" value={formData.capital} disabled />
          <input type="text" name="continent" placeholder="Continent" value={formData.continent} disabled />
          <input type="text" name="currency" placeholder="Currency" value={formData.currency} disabled />
          <input type="text" name="languages" placeholder="Languages" value={formData.languages} disabled />
        </section>
        <div className="button-update">
          <button onClick={handleUpdate}>Update country</button>
          <button onClick={handleDelete}>Delete country</button>
        </div>
=======
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
        <h1>Hello, Vista 3</h1>
        <section className="container-update">
          <div className="left-input">
            <label htmlFor="code">Code Country</label>
            <input
              type="text"
              id="code"
              
              onBlur={(e) => setValue(e.target.value)}
            />
            <button onClick={handleClick}>Consult</button>
          </div>
          <div className="right-input">
            <label htmlFor="code">Code</label>
            <input
              type="text"
              id="code"
              defaultValue={country.code}
            />
             <label htmlFor="name">Name</label>
            <input
              type="text"
              name ="name"
              defaultValue={country.name}
              onBlur={handleChange}
            />
          </div>
          <div className="right-input">
            <label htmlFor="continent">Continent</label>
            <input
              type="text"
              name ="continent"
              defaultValue={country.continent?.name}
              onBlur={handleChange}
            />
            <label htmlFor="capital">Capital</label>
            <input
              type="text"
              name ="capital"
              defaultValue={country.capital}
              onBlur={handleChange}
            />
          </div>
          <div className="right-input">
            <label htmlFor="languages">Languages</label>
            <input
              type="text"
              name ="languages"
              defaultValue={country?.languages?.[0]?.name || ""}
              onBlur={handleChange}
            />
            <label htmlFor="currency">Currency</label>
            <input
              type="text"
              name ="currency"
              defaultValue={country.currency} 
              onBlur={handleChange}
            />
          </div>
        </section>
        <div className="buttons-container">
  <div className="button-update">
    <button onClick={handleUpdate}>Update Country</button>
  </div>
  <div className="button-delete">
    <button onClick={handleClickDelete}>Delete Country</button>
  </div>
</div>
>>>>>>> e7a36b598072c8f79554608b85e55c61f87a68e7
      </section>
    </>
  );
};
