import EventCard from "./components/EventCard";
import GuestForm from "./components/GuestForm";
import { weddingEvents } from "./data/events";
import invitationBackground from "./images/thumbnail.webp";

export default function App() {
  return (
    <div className="app">
      <header className="hero section">
        <div
          className="invitation-card"
          style={{
            backgroundImage: `url(${invitationBackground})`
          }}
          aria-label="Wedding invitation"
        >
          <div className="invitation-text">
            <p className="invitation-kicker">Wedding Invitation</p>
            <h5>Didi & Partner</h5>
            <p className="invitation-date">21 - 22 November 2026</p>
            <p>With joy in our hearts, we request your gracious presence at the wedding celebration.</p>
          </div>
        </div>
      </header>

      <main>
        <section id="events" className="section events-section">
          <div className="event-grid">
            {weddingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <GuestForm />
      </main>
    </div>
  );
}
