import Card from "../components/Card";

function Projet() {
  return (
    
    
    <div className="portfolio">

       <div><img src="../image/banner.jpg" alt="banner" className="banner-img" /></div>
      
      <section className="portfolio container d-flex justify-content-center mt-5">
        <div className="text-center w-60">
        <h1 className="mb-2">Portfolio</h1>
        <p className="mb-2">Voici quelques-unes de mes réalisations</p>
        <hr className="mx-auto w-60 h-5 border-primary border-5 opacity-100" />
        </div>
        </section>

        {/* LES CARDS */}
        <section className="container">
          <div className="row">

            <Card
            image="../image/fresh-food.jpg"
            title="Fresh Food"
            description="Site de vente de produits frais en ligne"
            tech="Site réalisé avec PHP et MySQL"
            />

            <Card
            image="../image/restaurant-japonais.jpg"
            title="Restaurant Akira"
            description="Site de vente de produits frais en ligne"
            tech="Site réalisé avec WordPress"
            />

            <Card
            image="../image/espace-bien-etre.jpg"
            title="Espace bien-être"
            description="Site de vente de produits frais en ligne"
            tech="Site réalisé avec LARAVEL"
            />

            <Card
            image="../image/seo.jpg"
            title="SEO"
            description="Amélioration du référencement d'un site e-commerce"
            tech="Utilisation des outils SEO"
            />

            <Card
            image="../image/coder.jpg"
            title="Création d'une API"
            description="Création d'une API RESTFULL publique"
            tech="PHP - SYNFONY"
            />

            <Card
            image="../image/screens.jpg"
            title="Maquette d'un site web"
            description="Création d'un prototype de site"
            tech="Réalisé avec FIGMA"
            />

            
          </div>
        </section>
          
    </div>
  );
}

export default Projet;