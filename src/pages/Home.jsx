import "../style/Home.css"; 
import { useEffect, useState } from "react";
import GithubModal from "../components/GithubModal.jsx"
import "../style/Header.css"




function Home() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Bonjour je suis John Doe</h1>
          <h2>Développeur Web Fullstack</h2>

          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
          >
            En savoir plus
          </button>

          {/* composant modal */}
          <GithubModal user={user} />
        </div>
        </div>
      

      {/* SECTION APROPOS + SKILLS */}
      <section className="car container my-5 ">
        <div className="row align-items-stretch">

          {/* A PROPOS */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 p-4">
              <h3>A propos</h3>
                <hr className="border-primary border-5 opacity-100 w-100" />
              <img 
                src="../image/john-doe-about.jpg" 
                alt="about" 
                className="img-fluid my-3"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod neque at massa lobortis eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod neque at massa lobortis eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod neque at massa lobortis eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod neque at massa lobortis eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod neque at massa lobortis eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed euismod neque at massa lobortis eleifend.
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="col-md-6 mb-4">
            <div className="card shadow border-0 h-100 p-4">
              <div>
                  <h3>Mes compétences</h3>
                    <hr className="border-primary border-5 opacity-100 w-100 mt-4" />

                  <p>HTML 90%</p>
                  <div className="progress mb-3">
                    <div 
                      className="progress-bar bg-danger" 
                      style={{ width: "90%" }}>
                    </div>
                  </div>

                  <p className="mb-1">CSS 80%</p>
                  <div className="progress mb-3">
                    <div 
                      className="progress-bar bg-info" 
                      style={{ width: "80%" }}>
                    </div>
                  </div>

                  <p>JavaScript 30%</p>
                  <div className="progress mb-3">
                    <div 
                      className="progress-bar bg-warning" 
                      style={{ width: "30%" }}>
                    </div>
                  </div>

                  <p>PHP 5%</p>
                  <div className="progress mb-3">
                    <div 
                      className="progress-bar bg-success" 
                      style={{ width: "5%" }}>
                    </div>
                  </div>

                  <p>React 10%</p>
                  <div className="progress">
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: "10%" }}>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;