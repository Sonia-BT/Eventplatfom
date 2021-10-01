import "./EventDetail.css";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function EventDetail() {
  const [events, setEvents] = useState([]);
  const { Eventname } = useParams();
  const history = useHistory();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/event` /*/${Eventname}*/
      );
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  events && console.log(events);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="DetailPage">
      <div className="BackButton">
        <button type="submit" onClick={() => history.goBack()}>
          <i class="fas fa-arrow-left"></i> <h3>Back</h3>
        </button>
      </div>
      <div className="EventDetail">
        <div className="EventBodyDetail">
          {events.data && (
            <div className="eventImage">
              <img src={events.data[0].eventImage} alt="ImageEvent"></img>
            </div>
          )}
          <div className="eventInformations">
            <div className="EventItem ">
              <h1>{events.data && events.data[0].eventName}</h1>
            </div>
            <div className="EventItem exp">
              {/* <h5 className="TitleE">Event eventDescription</h5> */}
              <p>{events.data && events.data[0].eventDescription}</p>
            </div>
            <div className="EventItem">
              <h5 className="TitleE"> Event Date : </h5>
              <h5 className="eventData">
                {events.data && events.data[0].eventDate}
              </h5>
            </div>
            <div className="EventItem">
              <h5 className="TitleE">Category : </h5>
              <h5 className="eventData">
                {events.data && events.data[0].category}
              </h5>
            </div>
            <div className="EventItem">
              <h5 className="TitleE">Format : </h5>
              <h5 className="eventData">
                {events.data && events.data[0].format}
              </h5>
            </div>
            <div className="EventItem">
              <h5 className="TitleE">Event Online : </h5>
              <h5 className="eventData">
                {events.data && events.data[0].Online}
              </h5>
            </div>
            <div className="Creator EventItem">
              <h5 className="TitleE">Created by :</h5>
              <h5 className="eventData">
                {events.data && events.data[0].Creator}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
