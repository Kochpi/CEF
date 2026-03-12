function Contact() {
  return (
    <div className="contact-me">
      
      {/*  + titre + pour me contacter */}
      <section className="contact container d-flex justify-content-center mt-5">
        <div className="text-center w-60">
          <h1 className="mb-2">Contact</h1>
          <p className="mb-2">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir ce formulaire de contact</p>
          <hr className="border border-primary border-3 w-50 mx-auto opacity-100" />
        </div>
      </section>

        
      <section className="form-me mt-4">
        <div className="form-me container mt-4">
        <div className="row">

            {/* FORMULAIRE A GAUCHE */}
            <div className="form col md-6 mb-3">
              <h1 className="mb-2">Formulaire de contact</h1>
              <hr className="border-primary border-5 opacity-100" />

              {/* FORMULAIRE */}
              <form>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Votre email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tel" className="form-label">  </label>
                  <input
                  type="text"
                  className="form-control"
                  id="tel"
                   placeholder="Votre numéro de téléphone"
                   />
                        
                </div>

                <div className="mb-3">
                  <label htmlFor="sujet" className="form-label">  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sujet"
                    placeholder="Sujet"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label"></label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="6"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
                
              </form>
            </div>
                


                
          {/* PARTIE DROITE MES COORDONNEES */}
          <div className="coordo col-md-6 mb-3">
            <h1 className="mb-2">Mes coordonnées</h1>
              <hr className="border-primary border-5 opacity-100" />
              <h2 className="name mt-4">John Doe</h2>
              
              <div className="coor d-flex align-items-center">
                
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-map me-3" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                    <p className="mb-0">40 rue Laure Debiold</p>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-geo-fill me-3" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                    <p className="mb-0">69009 Lyon France</p>
                  </li>       
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-telephone-fill me-3" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                    <p className="mb-0">10 20 30 40 50</p>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-envelope me-3" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
                    <p className="mb-0">john-doe@gmail.com</p>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <img src="../image/Map.png" alt="map" 
                    style={{ maxWidth: '500px', width: '100%', height: 'auto' }}   />
                  </li>
                </ul>
              </div>             
          </div>            
        </div>
      </div>
      </section>
        
    </div>
  );
}

export default Contact;