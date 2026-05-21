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
      <h2>Guest Details Form</h2>
      <p>Please share your details so we can plan better. Responses are saved to a Google Sheet you can export as Excel.</p>

      <iframe
        className="google-form-embed"
        title="Wedding guest details form"
        src={embedUrl}
        width="100%"
        height="1100"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading form…
      </iframe>

      <p className="google-form-fallback">
        <a href={viewUrl} target="_blank" rel="noopener noreferrer">
          Open form in a new tab
        </a>
      </p>
    </section>
  );
}
