import EventCard from "./components/EventCard";
import GuestForm from "./components/GuestForm";
import { weddingEvents } from "./data/events";

const heroLinks = [
  { label: "Events", href: "#events" },
  { label: "Guest Form", href: "#guest-form" }
];

export default function App() {
  return (
    <div className="app">
      <header className="hero section">
        <p className="tagline">Together with their families</p>
        <h1>Didi & Partner Wedding Celebration</h1>
        <p className="hero-text">
          We are excited to celebrate with you. Explore all wedding functions below and share your details in the guest form.
        </p>
        <nav className="hero-actions" aria-label="Page sections">
          {heroLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
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
