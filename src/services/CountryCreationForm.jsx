import { useState } from "react";
import axios from "axios";
import { useCountryData } from "./useCountryData";

const CountryCreationForm = () => {
  const {  country, setCode } = useCountryData();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/country/countries", country);
      console.log("Creado con exito");
    } catch (error) {
      console.log("Error al crear", error);
    }
  };

  return (
    <div className="background">
      <div className="section-input">
        <h1>
          Create <span>Country</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed rerum
          sapiente cumque ducimus autem in, quos voluptatem
        </p>
        <form onSubmit={handleSubmit}>
          <div className="container-input">
            <input
              type="text"
              name="code"
              placeholder="Code"
              onBlur={handleCodeChange}
            />
            <input type="text" placeholder="Name" disabled value={country?.name}/>
            <input type="text" placeholder="Capital" disabled value={country?.capital}/>
            <input type="text" placeholder="Continent" disabled value={country?.continent?.name}/>
            <input type="text" placeholder="Currency" disabled value={country?.currency}/>
          </div>
          <div className="button-create">
            <button type="submit">create country</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryCreationForm;

