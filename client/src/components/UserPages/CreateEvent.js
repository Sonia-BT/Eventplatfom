import "./CreateEvent.css";

function CreateEvent() {
  return (
    <div className="CreateEvent">
      <div className="bodyEvent">
        <form className="ImageForm">
          <div className="EventImage">
            <input type="file" className="AddImage" />
          </div>
        </form>
        <form className="CreateEventForm">
          <h1>Create Your Event</h1>
          <label>
            <h4>Event Title</h4>
          </label>
          <input className="Input" />
          <label>
            <h4>Event Description</h4>
          </label>
          <input className="EventDescriptionInput"></input>
          <label>
            <h4>Event Details</h4>
          </label>
          <div className="Selections">
            <select name="dropdown">
              <option value="Toutes les Catégories">Category</option>
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
            <select name="dropdown">
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
            <select name="dropdown">
              <option value="EventOnLine">Event Online</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>
          <div className="EventCreator">
            <label>
              <h4>Creator :</h4>
            </label>
            <label>Username from the database</label>
          </div>

          <label>
            <h4>Event Date</h4>
          </label>
          <input
            className="Input"
            type="date"
            min={new Date().toISOString().slice(0, -14)}
            max="2023-12-31"
          />
          <button>
            <h3>
              <i class="fas fa-plus"></i>
              Event
            </h3>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
