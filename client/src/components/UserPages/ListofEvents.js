import React from "react";
import "./ListofEvents.css";

const ListofEvents = () => {
  return (
    <div className="filterListofEvent">
      <div className="userEventFilter">
        <div className="searchBar">
          <h1>
            Search Bar <i className="fas fa-search"></i>
          </h1>
          <form className="SearchForm">
            <input
              className="SearchInput"
              placeholder=" Looking for an Event ?"
              // onChange={(e) => setsearchEvent(e.target.value)}
              // value={searchEvent}
            />
          </form>
        </div>
        <form className="formFilter">
          <h1>
            Filter <i className="fas fa-filter"></i>
          </h1>
          <div className="Filters">
            <div className="OnlineEvent">
              <label> Online Event </label>
              <label className="switch">
                <input type="checkbox" />
                <span /*onClick={handelclick}*/ className="slider round"></span>
              </label>
            </div>
            <h2>Category</h2>
            <select
              name="dropdown"
              // onChange={(e) => {
              //   setCategory(e.target.value);
              // }}
              className="Category"
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
            <select
              name="dropdown"
              className="Format"
              // onChange={(e) => {
              //   setFormat(e.target.value);
              // }}
            >
              <option value="Tout les Formats">Tout les Formats</option>
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
              <option value={0}>Mois</option>
              <option value={1}>Janvier</option>
              <option value={2}>Février</option>
              <option value={3}>Mars</option>
              <option value={4}>Avril</option>
              <option value={5}>Mai</option>
              <option value={6}>Juin</option>
              <option value={7}>Juillet</option>
              <option value={8}>Aout</option>
              <option value={9}>Septembre</option>
              <option value={10}>Octobre</option>
              <option value={11}>Novembre</option>
              <option value={12}>Décembre</option>
            </select>
            <select name="dropdown" className="Date Jours">
              <option value="Jours">Jours</option>
              <option value="Samedi">Samedi</option>
              <option value="Dimanche">Dimanche</option>
              <option value="Lundi">Lundi</option>
              <option value="Mardi">Mardi</option>
              <option value="Mercredi">Mercredi</option>
              <option value="Jeudi">Jeudi</option>
              <option value="Vendredi">Vendredi</option>
            </select>
            <select name="dropdown" className="Date Heure">
              <option value="Heure">Heure</option>
              <option value="Month">Matin</option>
              <option value="Hour">Aprés-midi</option>
            </select>
          </div>
        </form>
      </div>
      <div className="userListofEvent">
        <div className="userList">
          <div className="userEvent">
            <div className="userEventPic">
              <img alt="Image Undefined"></img>
            </div>
            <div className="userEventInformations">
              <div className="userButtons">
                <button className="modifyButton">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button className="deleteButton">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div className="userItemEvent">
                <label>Title : </label>
                <label>Description : </label>
                <label>Date : </label>
              </div>
              <div className="userEventDetails">
                <label>Category</label>
                <label>format</label>
                <label>Online</label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="scrollbarEvents">
            <div class="scrollbar scrollbar-primary">
              <div class="force-overflow"></div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ListofEvents;
