import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./EventsList.css";

function EventsList() {
  const [events, setEvents] = useState([]);
  const [searchEvent, setsearchEvent] = useState("");
  const [category, setCategory] = useState("Toutes les Catégories");
  const [format, setFormat] = useState("Tout les Formats");
  const [click, setClick] = useState(false);
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(8);

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/event`);
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  events && console.log(events);

  useEffect(() => {
    getData();
  }, []);

  function handelclick() {
    setClick(!click);
  }

  //Get current events (For limited the number of events in one page)
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  //Pagination
  const pageNumbers = [];
  function pagination(pageNumbers, eventsPerPage) {
    for (let i = 1; i <= Math.ceil(events.data.length / eventsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="EventPage">
      {/* the Filter Bar */}
      <div className="EventFilter">
        <div className="searchBar">
          <h1>Search Bar</h1>
          <form className="SearchForm" onSubmit={(e) => e.preventDefault()}>
            <input
              className="SearchInput"
              placeholder=" Looking for an Event ?"
              onChange={(e) => setsearchEvent(e.target.value)}
              value={searchEvent}
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
              onChange={(e) => {
                setCategory(e.target.value);
              }}
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
            <select
              name="dropdown"
              className="Format"
              onChange={(e) => {
                setFormat(e.target.value);
              }}
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
      {/* Create the List of Events */}
      <div className="GlobalEvents">
        <div className="EventList">
          {events.data &&
            events.data
              .slice(indexOfFirstEvent, indexOfLastEvent)
              .filter(
                (el) =>
                  el.eventName
                    .toUpperCase()
                    .includes(searchEvent.toUpperCase()) ||
                  el.format.toUpperCase().includes(searchEvent.toUpperCase()) ||
                  el.category.toUpperCase().includes(searchEvent.toUpperCase())
              )
              .filter((el) => {
                if (format == "Tout les Formats") return true;
                return el.format == format;
              })
              .filter((el) => {
                if (category == "Toutes les Catégories") return true;
                return el.category == category;
              })
              .map((el) => {
                return (
                  <div className="EventCard">
                    <img
                      onClick={() => history.push(`/${el.eventName}`)}
                      className="ImageCard"
                      src={el.eventImage}
                      alt="ImageEvent"
                    ></img>
                    <div className="InformationsCard">
                      <div
                        className="TitleCard"
                        onClick={() => history.push(`/${el.eventName}`)}
                      >
                        {el.eventName}
                      </div>
                      <div
                        className="timeCard"
                        onClick={() => history.push(`/${el.eventName}`)}
                      >
                        {el.eventDate}
                      </div>
                      <div className="CreatorCard">
                        <div
                          className="User"
                          onClick={() => history.push(`/${el.eventName}`)}
                        >
                          User
                        </div>
                        <div className="Fav">
                          {/* <i className="fas fa-heart"></i>  */}
                          <i class="far fa-bookmark $"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        {/* PAGINATION  */}
        <div class="pagination">
          <a href="#">&laquo; Previous</a>
          <a href="#" class="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">Next &raquo;</a>
        </div>

        {pagination}
        {pageNumbers.map((number) => (
          <div className="Pagination">
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList;
