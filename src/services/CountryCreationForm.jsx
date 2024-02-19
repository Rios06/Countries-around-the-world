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
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryCreationForm;
