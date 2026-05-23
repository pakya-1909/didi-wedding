import type { WeddingEvent } from "../data/events";

type EventCardProps = {
  event: WeddingEvent;
};

const formatDate = (dateValue: string): string =>
  new Date(dateValue).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

export default function EventCard({ event }: EventCardProps) {
  if (event.invitationDetails) {
    return (
      <article className={event.image ? "event-card event-card-with-image" : "event-card"}>
        {event.image ? <img className="event-card-image" src={event.image} alt={`${event.title} decoration`} /> : null}
        <div className="event-card-content invitation-event-content">
          <p className="invitation-event-intro">{event.invitationDetails.intro}</p>
          <h3>{event.invitationDetails.groom}</h3>
          <p className="invitation-event-family">{event.invitationDetails.groomParents}</p>
          <p className="invitation-event-weds">weds</p>
          <h3>{event.invitationDetails.bride}</h3>
          <p className="invitation-event-family">{event.invitationDetails.brideParents}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={event.image ? "event-card event-card-with-image" : "event-card"}>
      {event.image ? <img className="event-card-image" src={event.image} alt={`${event.title} decoration`} /> : null}
      <div className="event-card-content">
        <h3>{event.title}</h3>
        <p className="event-meta">
          <span>{formatDate(event.date)}</span>
        </p>
        <p className="event-time">
          <span>Timing: {event.time}</span>
        </p>
        <p className="event-venue">Venue: {event.venue}</p>
        {event.mapLink ? (
          <a className="event-location-link" href={event.mapLink} target="_blank" rel="noreferrer">
            View location
          </a>
        ) : null}
      </div>
    </article>
  );
}
