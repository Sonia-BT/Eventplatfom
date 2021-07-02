import { useState } from "react";
import "./EventsList.css";

function EventsList() {
  const [click, setClick] = useState(false);
  function handelclick() {
    setClick(!click);
  }

  return (
    <div className="EventPage">
      <div className="EventFilter">
        <div className="searchBar">
          <h1>Search Bar</h1>
          <form /*onSubmit={(e) => e.preventDefault()}*/ className="SearchForm">
            <input
              className="SearchInput"
              // onChange={props.onchange}
              // value={props.value}
              placeholder=" Looking for an Event ?"
            />
            <button className="SearchButton">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <form className="formFilter">
          <h1>Filter</h1>
          <div className="Filters">
            <div className="OnlineEvent">
              <label> Recherche d'événements en ligne </label>
              <button
                onClick={handelclick}
                className={click ? "ButtonON" : "ButtonOFF"}
              >
                {click ? "ON" : "OFF"}
              </button>
            </div>
            <h2>Catégories</h2>
            <select
              name="dropdown"
              // onChange={(e) => {
              //   setregionn(e.target.value);
              // }}
              className="Categories"
            >
              <option value="Toutes les Catégories">
                Toutes les Catégories
              </option>
              <option value="Affaires">Affaires</option>
              <option value="Art">Art</option>
              <option value="Musique">Musique</option>
              <option value="Mode">Mode</option>
              <option value="films et médias">Movie and media</option>
              <option value="Science et technologies">
                Science and technologies
              </option>
              <option value="fêtes">fêtes</option>
              <option value="Gastronomie">Gastronomie</option>
            </select>
            <h2>Format</h2>
            <select name="dropdown" className="Format">
              <option value="Format">Tout les Formats</option>
              <option value="Cours">Cours</option>
              <option value="Conférences">Conférences</option>
              <option value="Festival">Festival</option>
              <option value="fête">fête</option>
              <option value="Exposition">Exposition</option>
              <option value="Gala">Gala</option>
              <option value="Spectacle">Spectacle</option>
              <option value="Séminaire">Séminaire</option>
              <option value="Visite">Visite</option>
            </select>
            <h2>Date</h2>
            <select name="dropdown" className="Date Mois">
              <option value="N'importe Quel Date">N'importe Quel Date</option>
              <option value="Janvier">Janvier</option>
              <option value="Février">Février</option>
              <option value="Mars">Mars</option>
              <option value="Avril">Avril</option>
              <option value="Mai">Mai</option>
              <option value="Juin">Juin</option>
              <option value="Juillet">Juillet</option>
              <option value="Aout">Aout</option>
              <option value="Septembre">Septembre</option>
              <option value="Octobre">Octobre</option>
              <option value="Novembre">Novembre</option>
              <option value="Décembre">Décembre</option>
            </select>
            <select name="dropdown" className="Date Jours">
              <option value="N'importe quel Jours">N'importe Quel Jour</option>
              <option value="Samedi">Samedi</option>
              <option value="Dimanche">Dimanche</option>
              <option value="Lundi">Lundi</option>
              <option value="Mardi">Mardi</option>
              <option value="Mercredi">Mercredi</option>
              <option value="Jeudi">Jeudi</option>
              <option value="Vendredi">Vendredi</option>
            </select>
            <select name="dropdown" className="Date Heure">
              <option value="N'importe Quel Heure">N'importe Quel Heure</option>
              <option value="Matin">Matin</option>
              <option value="Aprés-midi">Aprés-midi</option>
              <option value="Soir">Soir</option>
            </select>
          </div>
        </form>
      </div>
      <div className="EventList">
        <h1>The list Of the Events</h1>
      </div>
    </div>
  );
}

export default EventsList;
