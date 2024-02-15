import { Link } from 'react-router-dom';

const Navbar= () => {
    return (
        <div className="menu-container">
          <div className="menu-items">
            <Link to="/">Home</Link>
            <Link to="/country/countries">Create Country</Link>
            <Link to="/update">Update Country</Link>
            
          </div>
        </div>
      );
    };

export default Navbar;