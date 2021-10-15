import "./CreateEvent.css";
import { useState } from "react";
import axios from "axios";
// import { events } from "../../../../server/models/event";

function CreateEvent() {
  const [events, setEvents] = useState([]);
  const [eventTitle, SetEventTitle] = useState("");
  const [eventDescrip, SetEventDescrip] = useState("");
  const [category, SetCategory] = useState("");
  const [format, SetFormat] = useState("");
  const [online, SetOnline] = useState("");
  const [eventDate, SetEventDate] = useState("");
  const [eventImage, SetEventImage] = useState();

  //Min DateTime
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd + " " + "T08:30";

  //Retrieve the DATA from the user
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
          eventImage: eventImage,
        });
        // console.log("add:::::", data);
        setEvents([
          ...events,
          {
            eventName: data.data.eventTitle,
            eventDescription: data.data.eventDescrip,
            category: data.data.category,
            format: data.data.format,
            Online: data.data.online,
            eventDate: data.data.eventDate,
            eventImage: data.data.eventImage,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CreateEvent">
      <div className="bodyEvent">
        <form
          method="post" /*Concerne le upload de l'image*/
          className="EventForm"
          action="/upload" /*Concerne le upload de l'image*/
          encType="multipart/form-data" /*Concerne le upload de l'image*/
          onSubmit={(e) => {
            setData(e);
          }}
        >
          <div className="EventImage">
            <input
              onChange={(e) => {
                SetEventImage(e.target.files[0]);
              }}
              name="eventImage"
              id="eventImage"
              type="file"
              accept=".jpg" //fichier format photo uniquement
              className="btn btn-primary"
            />
          </div>

          <div className="CreateEventForm">
            <h1>Create Your Event</h1>
            <label>
              <h4>Event Title</h4>
            </label>
            <input
              onChange={(e) => {
                SetEventTitle(e.target.value);
              }}
              name="eventName"
              className="Input Title"
            />
            <label>
              <h4>Event Description</h4>
            </label>
            <textarea
              onChange={(e) => {
                SetEventDescrip(e.target.value);
              }}
              name="eventDescription"
              className="EventDescriptionInput"
              rows="3"
              cols="30"
            ></textarea>
            <label>
              <h4>Event Details</h4>
            </label>
            <div className="Selections">
              <select
                onChange={(e) => {
                  SetCategory(e.target.value);
                }}
                name="category"
              >
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
              <select
                onChange={(e) => {
                  SetFormat(e.target.value);
                }}
                name="format"
              >
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
              <select
                onChange={(e) => {
                  SetOnline(e.target.value);
                }}
                name="Online"
              >
                <option value="EventOnLine">Event Online</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <label>
              <h4>Event Date</h4>
            </label>
            <input
              onChange={(e) => {
                SetEventDate(e.target.value);
              }}
              name="eventDate"
              className="Input"
              type="datetime-local"
              min={today}
              max="2022-12-31 T00:00"
            />
            <button type="submit" name="Upload">
              <h3>
                <i className="fas fa-plus"></i>
                Event
              </h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
