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
            <h2>Didi & Partner</h2>
            <p className="invitation-date">20 - 22 November 2026</p>
            <p>With joy in our hearts, we request your gracious presence at the wedding celebration.</p>
          </div>
        </div>
      </header>

      <main>
        <section id="events" className="section">
          <h2>Wedding Functions</h2>
          <p className="section-intro">
            This section is fully dynamic. Update the events list in <code>src/data/events.ts</code> to add or remove any function.
          </p>
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
