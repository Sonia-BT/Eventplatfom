import "./CreateEvent.css";
import { useState } from "react";
import axios from "axios";
// import { events } from "../../../../server/models/event";

function CreateEvent() {
  const [events, setEvents] = useState([]);
  const [eventTitle, SetEventTitle] = useState([]);
  const [eventDescrip, SetEventDescrip] = useState([]);
  const [category, SetCategory] = useState([]);
  const [format, SetFormat] = useState([]);
  const [online, SetOnline] = useState([]);
  const [eventDate, SetEventDate] = useState([]);

  const setData = async (e) => {
    try {
      e.preventDefault();
      if (
        eventTitle &&
        eventDescrip &&
        category &&
        format &&
        online &&
        eventDate
      ) {
        const { data } = await axios.post(`http://localhost:5000/event`, {
          eventName: eventTitle,
          eventDescription: eventDescrip,
          category: category,
          format: format,
          Online: online,
          eventDate: eventDate,
        });
        setEvents([
          ...events,
          {
            eventTitle: data.data.eventTitle,
          },
        ]);
        SetEventTitle("");
        SetEventDescrip("");
        SetCategory("");
        SetFormat("");
        SetOnline("");
        SetEventDate("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="CreateEvent">
      <div className="bodyEvent">
        <form className="ImageForm">
          <div className="EventImage">
            <input name="eventImage" type="file" className="AddImage" />
          </div>
        </form>
        <form
          className="CreateEventForm"
          onSubmit={(e) => {
            setData(e);
          }}
        >
          <h1>Create Your Event</h1>
          <label>
            <h4>Event Title</h4>
          </label>
          <input name="eventName" className="Input" />
          <label>
            <h4>Event Description</h4>
          </label>
          <textarea
            name="eventDescription"
            className="EventDescriptionInput"
            rows="3"
            cols="30"
          ></textarea>
          <label>
            <h4>Event Details</h4>
          </label>
          <div className="Selections">
            <select name="category">
              <option value="Toutes les Catégories">Categorie</option>
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
            <select name="format">
              <option value="Format">Format</option>
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
            <select name="Online">
              <option value="EventOnLine">Event Online</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>
          {/* <div className="EventCreator">
            <label>
              <h4>Creator :</h4>
            </label>
            <label>Username from the database</label>
          </div> */}

          <label>
            <h4>Event Date</h4>
          </label>
          <input
            name="eventDate"
            className="Input"
            type="date"
            min={new Date().toISOString().slice(0, -14)}
            max="2023-12-31"
          />
          <button>
            <h3>
              <i className="fas fa-plus"></i>
              Event
            </h3>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
