import { UpdateCountryForm } from "./UpdateCountryForm";
import '../styles/Update.css'

export const UpdateCountry = () => {
  const countryCode = "AR";
  return (
    <>
    <UpdateCountryForm countryCode={countryCode}/>
    <div>UpdateCountry</div>
    </>
  );
};

export default UpdateCountry;