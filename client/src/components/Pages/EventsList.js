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
  const [month, setMonth] = useState(0);

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/event`);
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  events.data && console.log(events);

  useEffect(() => {
    getData();
  }, []);

  function handelclick() {
    setClick(!click);
  }

  const inc = () => {
    if (indexOfLastEvent < events.data.length - 1)
      setCurrentPage(currentPage + 1);

    console.log(indexOfLastEvent);
    console.log(currentPage);
  };
  const dec = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    console.log(currentPage);
  };

  //Get current events (For limited the number of events in one page)
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  //  function pagination (pageNumbers, eventsPerPage) {
  //   for (let i = 1; i <= Math.ceil(events.data.length / eventsPerPage); i++) {
  //     return pageNumbers.push(i);
  //   }
  // }
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // function Pagination(eventsPerPage) {
  //   return events.data && Math.ceil(events.data.length / eventsPerPage);
  // }

  // const paginate = Pagination(eventsPerPage);
  // // console.log("paginate : ", paginate);

  return (
    <div className="EventPage">
      {/* the Filter Bar */}
      <div className="EventFilter">
        <div className="searchBar">
          <h1>
            Search Bar <i className="fas fa-search"></i>
          </h1>
          <form className="SearchForm" onSubmit={(e) => e.preventDefault()}>
            <input
              className="SearchInput"
              placeholder=" Looking for an Event ?"
              onChange={(e) => setsearchEvent(e.target.value)}
              value={searchEvent}
            />
            {/* <button className="SearchButton">
              <i class="fas fa-search"></i>
            </button> */}
          </form>
        </div>
        <form className="formFilter">
          <h1>
            Filter <i className="fas fa-filter"></i>
          </h1>
          <div className="Filters">
            <div className="OnlineEvent">
              <label> Online Event </label>
              {/* <button
                onClick={handelclick}
                className={click ? "ButtonON" : "ButtonOFF"}
              >
                {click ? "ON" : "OFF"}
              </button> */}
              <label className="switch">
                <input type="checkbox" />
                <span onClick={handelclick} className="slider round"></span>
              </label>
            </div>
            <h2>Category</h2>
            <select
              name="dropdown"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
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
            <select
              name="dropdown"
              className="Date Mois"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            >
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
                if (click === false) return true;

                return el.Online === "true";
              })
              .filter((el) => {
                if (format === "Tout les Formats") return true;
                return el.format === format;
              })
              .filter((el) => {
                if (category === "Toutes les Catégories") return true;
                return el.category === category;
              })
              // .filter((el) => {
              //   if (month === 0) return true;
              //   return console.log(el.eventDate.getMonth() + 1);
              // })

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
                          <i className="far fa-bookmark $"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="pagination">
          <button className="Previous_button" onClick={dec}>
            &laquo; Previous
          </button>
          <button className="Next_button" onClick={inc}>
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsList;
