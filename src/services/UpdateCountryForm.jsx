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
      </section>
    </>
  );
};
