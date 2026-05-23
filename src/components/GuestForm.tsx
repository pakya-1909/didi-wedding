import { getGoogleFormUrl, toGoogleFormEmbedUrl, toGoogleFormViewUrl } from "../lib/googleForm";

export default function GuestForm() {
  const formUrl = getGoogleFormUrl();

  if (!formUrl) {
    return (
      <section id="guest-form" className="section">
        <h2>Guest Details Form</h2>
        <p className="feedback feedback-error">
          Google Form URL is not configured. Add <code>VITE_GOOGLE_FORM_URL</code> to your <code>.env</code> file
          and restart the dev server.
        </p>
      </section>
    );
  }

  const embedUrl = toGoogleFormEmbedUrl(formUrl);
  const viewUrl = toGoogleFormViewUrl(formUrl);

  return (
    <section id="guest-form" className="section">
      <div className="guest-form-header">
        <p className="eyebrow">RSVP Details</p>
        <h2>Share Your Guest Details</h2>
        <p>
          Please fill this quick form so we can plan seating, food, and event arrangements. Responses are saved directly
          to a Google Sheet.
        </p>
      </div>

      <div className="google-form-card">
        <div className="google-form-card-top">
          <div>
            <p className="google-form-kicker">Wedding Guest Form</p>
            <strong>Didi & Partner Wedding Celebration</strong>
          </div>
          <a className="google-form-button" href={viewUrl} target="_blank" rel="noopener noreferrer">
            Open Full Form
          </a>
        </div>

        <iframe
          className="google-form-embed"
          title="Wedding guest details form"
          src={embedUrl}
          width="100%"
          height="980"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading form...
        </iframe>
      </div>
    </section>
  );
}
