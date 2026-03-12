import { Link } from "react-router-dom";
import "../style/Header.css"


function Header() {
  return (
    
    <header className="header-li">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img
          src="/image/logo.png"
          alt="Mon portfolio"
          style={{ height: "40px"}}
          className="d-inline-block align-text-top"
          />
          </Link>
          <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projet">Projet</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/legale">Mentions légales</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">Services</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;