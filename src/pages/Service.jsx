import React from "react";
import "../style/Service.css"


function Service() {
  return (
    <div className="service">
        <div><img src="../image/banner.jpg" alt="banner" className="banner-img" /></div>
       
        <section className="offer container d-flex justify-content-center mt-5">
        <div className="text-center w-60">
        <h1 className="mb-2">Mon offre de services</h1>
        <p className="mb-2">Voici les prestations sur lesquelles je peux intervenir</p>
        </div>
        </section>
        <hr className="border border-primary border-3 w-50 mx-auto opacity-100" />

        <section className="cards">
          <div className="card container shadow border-0 mt-4 ">
            <div className="row">

            {/* CARD 1 DUX DESIGN */}
            <div className="col-md-4 mb-3 mt-5">
              <div className="card-1 h-100  text-center">
                <div className="card-icon">
                  <i className="bi bi-brush" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                </div>
                <div className="card-body">
                  <h2 className="card-title">UX Design</h2>
                  <p className="card-text">L'UX Design est une discipline permettant d'augmenter les performances d'un site internet
                     ou d'une application mobile en fonction des attentes des utilisateurs.</p>
                </div>
              </div>
            </div>

            {/* CARD 2 DEV WEB */}
            <div className="col-md-4 mb-3 mt-5">
              <div className="card-2 h-100 text-center">
                <div className="card-icon">
                  <i className="bi bi-code-slash" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                </div>
                <div className="card-body">
                  <h2 className="card-title">Développement Web</h2>
                  <p className="card-text">Concrètement, cette discipline revient à construire tout ou partie d'un site,
                     d'une plateforme ou d'une application web à l'aide de langages « parlés » par les ordinateurs, tels que le Python,
                      le JavaScript, le Ruby, le PHP ou le C++.</p>
                </div>
              </div>
            </div>

            {/* CARD 3 REFERENCEMENT */}
            <div className="col-md-4 mb-3 mt-5">
              <div className="card-3 h-100 text-center">
                <div className="card-icon">
                  <i className="bi bi-search" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                </div>
                <div className="card-body">
                  <h2 className="card-title">Référencement</h2>
                  <p className="card-text">Le SEO (Search Engine Optimization), ou référencement naturel, consiste à aider les moteurs
                     de recherche à interpréter votre contenu, et à aider les internautes à trouver votre site et à décider s'ils doivent 
                     y accéder ou non via un moteur de recherche.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        </section>

       
        

    </div>
  );
}

export default Service;