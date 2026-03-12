function Legale() {
  return (
    <div className="mention">

      <section className="container text-center mt-5">
        <h1 className="mb-2">Mentions légales</h1>
        <p className="mb-2">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir ce formulaire de contact
        </p>
        <hr className="border border-primary border-3 w-50 mx-auto opacity-100" />
      </section>

      <div className="container mt-5">

        <div className="accordion" id="accordionLegale">

          {/* ACCORDEON 1 */}
          <div className="accordion-item">

            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Editeur du site
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse collapse"
              data-bs-parent="#accordionLegale"
            >

              <div className="accordion-body">

                <h5>John Doe</h5>

                <p>
                  <i className="bi bi-map"></i> 40 rue Laure Diebold <br />
                  <i className="bi bi-geo-alt"></i> 69009 Lyon, France <br />
                  <i className="bi bi-telephone"></i> 10 20 30 40 50 <br />
                  <i className="bi bi-envelope"></i> john.doe@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* ACCORDEON 2 */}
          <div className="accordion-item2">

            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Hébergeur
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionLegale"
            >

              <div className="accordion-body">

                <h3>alwaysdata</h3>

                <p>
                  91 Rue du Faubourg saint-Honoré, 75008 Paris <br />
                  <i className="bi bi-globe"></i> <a href="#">alwaysdata.com</a>
                  
                </p>

              </div>

            </div>

          </div>

          {/* ACCORDEON 3 */}
          <div className="accordion-item3">

            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Crédits
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionLegale"
            >

              <div className="accordion-body">

                <h3>Crédits</h3>

                <p>
                  Ce site a été réaliser par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/ecole/pourquoi-choisir-le-cef/">Centre Européen de Formation</a> <br />
                  <em>Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></em> <br />
                  <em>Les favicons utilisés sur ce site ont été fournie par <a href="https://www.flaticon.com/free-icons/john-doe"><em>John Doe Icons erstelt von Freepik - Favicon</em></a></em>
                </p>  
                

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Legale;