import "../style/Header.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-li bg-dark text-light mt-5">
      <div className="container py-4">
        
        <div className="row text-center text-md-start">
          
          <div className="col-md-4">
            <ul>
            <h6>John Doe</h6>
            <li><p className="mb-0">40 rue Bourzeix</p></li>
            <li><p className="mb-0">Lyon, France</p></li>
            <li><p className="mb-0">10 20 30 40 50</p></li>
            <li><p className="mb-0">john.doe@gmail.com</p></li>
            <div className=" d-flex gap-3 mt-2 fs-4 reseaux">
            <li><a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/john-doe-90b105260/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="https://x.com/elonmusk" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a></li>
            </div>
            </ul>
          </div>

          <div className="col-md-4">
            <ul>
            <h6>Liens</h6>
            <li><Link className="nav-link" to="/">Accueil</Link></li>
            <li><Link className="nav-link" to="/service">Services</Link></li>
            <li><Link className="nav-link" to="/projet">Portfolio</Link></li>
            <li><Link className="nav-link" to="/contact">Me contacter</Link></li>
            <li><Link className="nav-link" to="/legale">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul>
            <h6>Mes dernières réalisations</h6>
            <li><Link className="nav-link" to="/projet">Fresh Food</Link></li>
            <li><Link className="nav-link" to="/projet">Restaurant Akira</Link></li>
            <li><Link className="nav-link" to="/projet">Espace bien-être</Link></li>
            <li><Link className="nav-link" to="/projet">Le SEO</Link></li>
            <li><Link className="nav-link" to="/projet">Création d'une API</Link></li>
            <li><Link className="nav-link" to="/projet">Maquette d'un site web</Link></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;