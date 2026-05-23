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
            <h5>श्री गणेशाय नमः</h5>
            <p className="invitation-date">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ</p>
            <p className="invitation-date">निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा</p>
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
