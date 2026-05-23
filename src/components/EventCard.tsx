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
  return (
    <article className={event.image ? "event-card event-card-with-image" : "event-card"}>
      {event.image ? <img className="event-card-image" src={event.image} alt={`${event.title} decoration`} /> : null}
      <div className="event-card-content">
        <h3>{event.title}</h3>
        <p className="event-meta">
          <span>{formatDate(event.date)}</span>
          <span>{event.time}</span>
        </p>
        <p className="event-venue">{event.venue}</p>
        <p>{event.description}</p>
        {event.dressCode ? <p className="event-meta">Dress code: {event.dressCode}</p> : null}
        {event.mapLink ? (
          <a href={event.mapLink} target="_blank" rel="noreferrer">
            View location
          </a>
        ) : null}
      </div>
    </article>
  );
}
