import "./Principal.css";
import img1 from "../../Images/Exposition_Art.jpg";
import img2 from "../../Images/cours_culinaire.jpg";
import img3 from "../../Images/Login_Pic - Copie.jpg";
import img4 from "../../Images/mecanique.jpeg";
import img6 from "../../Images/compagne_vaccination.jpg";
import img7 from "../../Images/randonnée.jpg";

function Principal() {
  return (
    <div className="Caroussel_Container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img3} alt="first slide" />
            <div className="carousel-caption d-none d-md-block img1">
              <h2>Facilité</h2>
              <p>Créer ton événement en un clic</p>
            </div>
          </div>

          <div className="carousel-item ">
            <img className="d-block w-100" src={img1} alt="second slide" />
            <div className="carousel-caption d-none d-md-block img2">
              <h2>Créativité</h2>
              <p>
                Retrouve des événements d'art, de cuisine, de musique et bien
                d'autres ...
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img6} alt="Third  slide" />
            <div className="carousel-caption d-none d-md-block img3">
              <h2>Au coeur de l'information</h2>
              <p>Tout sur la santé</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img7} alt="Fourth slide " />
            <div className="carousel-caption d-none d-md-block img4">
              <h2>Découverte</h2>
              <p>trouve ta prochaine aventure </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Six slide " />
            <div className="carousel-caption d-none d-md-block img5">
              <h2>Diversité</h2>
              <p>des événements de divers domaines </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img4} alt="Seven slide" />
            <div className="carousel-caption d-none d-md-block img6">
              <h2>Apprentissage</h2>
              <p>Retrouve des cours manuelles et pratiques </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Principal;
