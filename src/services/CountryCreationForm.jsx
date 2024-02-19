<<<<<<< HEAD
import  { useState } from 'react';
import axios from 'axios';

const CountryCreationForm = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    capital: '',
    continent: '',
    currency: '',
    languages: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const languagesArray = formData.languages.split(',');

    const languagesObjects = languagesArray.map(name => ({ name }));

    setFormData({
      ...formData,
      languages: languagesObjects
    });

    try {
       
        const response = await axios.post('http://localhost:3000/country/countries', {
          ...formData,
          languages: languagesObjects 
        });
        console.log('Country created:', response.data);
      } catch (error) {
        console.error('Error creating country:', error);
      }
    };

  return (
    <div className="background">
      <div className="section-input">
        <h1>Create <span>Country</span> </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sed rerum sapiente cumque ducimus autem in, quos voluptatem
        </p>
        <form onSubmit={handleSubmit}>
          <div className="container-input">
            <input type="text" name="code" placeholder="Code" value={formData.code} onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="capital" placeholder="Capital" value={formData.capital} onChange={handleChange} />
            <input type="text" name="continent" placeholder="Continent" value={formData.continent} onChange={handleChange} />
            <input type="text" name="currency" placeholder="Currency" value={formData.currency} onChange={handleChange} />
            <input type="text" name="languages" placeholder="Languages" value={formData.languages} onChange={handleChange} />
          </div>
          <div className="button-create">
            <button type="submit">Create Country</button>
=======
import { useState } from "react";
import axios from "axios";
import { useCountryData  } from "./useCountryData";

const CountryCreationForm = () => {
  const { country, setCode } = useCountryData();

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    capital: "",
    continent: "",
    currency: "",
    languages: "",
  });

  const handleCodeChange = (e) => {
    const countryCode = e.target.value;
    setCode(countryCode.toUpperCase());
    setFormData({
      ...formData,
      code: countryCode,
    });
  };

  const handleConsultClick = async () => {
    try {
      const response = await axios.get("http://localhost:3000/country/countries");
      console.log("Consulta realizada con éxito:", response.data);
    } catch (error) {
      console.log("Error al consultar:", error);
    }
  };

  const handleCreateCountryClick = async () => {
    try {
      await axios.post("http://localhost:3000/country/countries", country);
      console.log("País creado con éxito");
    } catch (error) {
      console.log("Error al crear el país:", error);
    }
  };

  const handleClear = () => {
    console.log("clear");
    setFormData({
      code: "",
      name: "",
      capital: "",
      continent: "",
      currency: "",
      languages: "",
    });
    setCode("");
  };
  

  return (
    <div className="background">
      
      <div className="section-input">
        <form>
          <div className="container-input">
            <div className="left-input">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                name="code"
                placeholder="Code"
                onBlur={handleCodeChange}
              />
              <div className="button-consult">
              <button type="button" onClick={handleConsultClick}>consult</button>
              </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ width: '48%' }}>
                <input type="text" placeholder="Name" disabled value={country?.name} />
              </div>
              <div style={{ width: '48%' }}>
                <input type="text" placeholder="Capital" disabled value={country?.capital} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ width: '48%' }}>
                <input type="text" placeholder="Continent" disabled value={country?.continent?.name} />
              </div>
              <div style={{ width: '48%' }}>
                <input type="text" placeholder="Currency" disabled value={country?.currency} />
              </div>
            </div>
          </div>
          <div className="buttones" style={{ marginTop: '15px', textAlign: 'center' }}>
            <button type="button" onClick={handleClear}>clear</button>
            <button type="button" onClick={handleCreateCountryClick}>create country</button>
            
>>>>>>> e7a36b598072c8f79554608b85e55c61f87a68e7
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryCreationForm;
