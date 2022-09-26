// Events.js
import { Link } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs"

function Events({ events, userID }) {
    return (
        <div className="events">
            <div className="eventsHeading">
                <h1>Events</h1>
                <Link to='/createEvent' className="btn">Create Event</Link>
            </div>

            <div className="eventsGallery">
                {events && events.map(event => {
                    return (
                        <Link to={`/eventDetails/${userID}/${event.eventID}`} className="eventCard" key={event.eventID}>
                            <p>{new Date(`'${event.startDate}'`).toDateString()}</p>
                            <p className="eventName">{event.eventName}</p>
                            <p>{event.location}</p>
                            <p><BsPersonCircle /> {Object.keys(event.guestList).length} responded</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Events