import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './services/Home';
import { CreateCountry } from './services/CreateCountry';
import { useCountryData } from './services/useCountryData';
import { UpdateCountry } from './services/UpdateCountry';
import BuscarPais from './services/BuscarPais'
//import MyMap from './services/Map/MyMap';


const App = () => {
  const { country, setCode } = useCountryData();
  return (
    <Router>
      {/*<MyMap/>*/}
      <div className="app-container">
       {/*  <nav className="navbar">*/}
          {/*<Link to="/Home">Home</Link>*/}
          {/*<Link to="/">Buscar</Link>*/}
         {/* <Link to="/create">Create Country</Link>*/}
          {/*<Link to="/update">Update Country</Link>*/}
        {/*</nav>*/}

        {/* Contenido de las rutas */}
        <Routes>
         {/* <Route path="/Home" element = {<Home/>}/>*/}
          <Route path="/" element={<BuscarPais country={country} setCode={setCode} />} />
          <Route path="/create" element={<CreateCountry />} />
          <Route path="/update" element={<UpdateCountry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

