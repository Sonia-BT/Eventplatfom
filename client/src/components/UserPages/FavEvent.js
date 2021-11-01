import React from "react";
import "./FavEvent.css";
const FavEvent = () => {
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
              id="category"
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
          </div>
        </form>
      </div>
      <div className="userListofEvent">
        <div className="userList scrollbar scrollbar-primary">
          <div className="userEvent">
            <div className="userEventPic">
              <img alt="Image Undefined"></img>
            </div>
            <div className="userEventInformations">
              <div className="userButtons">
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
          <div class="force-overflow"></div>
        </div>
      </div>
    </div>
  );
};

export default FavEvent;
