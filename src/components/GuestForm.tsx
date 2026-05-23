import { useState } from "react";
import { getGoogleFormUrl, toGoogleFormResponseUrl, toGoogleFormViewUrl } from "../lib/googleForm";

export default function GuestForm() {
  const formUrl = getGoogleFormUrl();
  const [submitted, setSubmitted] = useState(false);

  if (!formUrl) {
    return (
      <section id="guest-form" className="section guest-form-section">
        <h2>Guest Details Form</h2>
        <p className="feedback feedback-error">
          Google Form URL is not configured. Add <code>VITE_GOOGLE_FORM_URL</code> to your <code>.env</code> file
          and restart the dev server.
        </p>
      </section>
    );
  }

  const viewUrl = toGoogleFormViewUrl(formUrl);
  const responseUrl = toGoogleFormResponseUrl(formUrl);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="guest-form" className="section guest-form-section">
      <div className="guest-form-header">
        <p className="eyebrow">RSVP Details</p>
        <h2>Share Your Guest Details</h2>
        <p>
          Please fill this quick form so we can plan seating, food, and event arrangements
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

        <form className="rsvp-card custom-rsvp-form" action={responseUrl} method="POST" target="google-form-submit" onSubmit={handleSubmit}>
          <p className="rsvp-card-kicker">You are warmly invited</p>
          <h3>Confirm Your Presence</h3>
          <p>
            Share your guest details with us so we can welcome you with love and make the arrangements special.
          </p>
          <label>
            Your name
            <input name="entry.559352220" type="text" placeholder="Enter your full name" />
          </label>
          <fieldset>
            <legend>Can you attend? *</legend>
            <label>
              <input name="entry.877086558" type="radio" value="Yes,  I'll be there" required />
              Yes, I'll be there
            </label>
            <label>
              <input name="entry.877086558" type="radio" value="Sorry, can't make it" required />
              Sorry, can't make it
            </label>
          </fieldset>
          <label>
            How many of you are attending?
            <input name="entry.924523986" type="number" min="1" placeholder="Number of guests" />
          </label>
          <fieldset>
            <legend>What will you be bringing?</legend>
            <span>Let us know what kind of dish(es) you'll be bringing</span>
            {["Mains", "Salad", "Dessert", "Drinks", "Sides/Appetizers"].map((item) => (
              <label key={item}>
                <input name="entry.186230675" type="checkbox" value={item} />
                {item}
              </label>
            ))}
            <label>
              <input name="entry.186230675" type="checkbox" value="__other_option__" />
              Other
              <input name="entry.186230675.other_option_response" type="text" placeholder="Tell us what you will bring" />
            </label>
          </fieldset>
          <label>
            Allergies or dietary restrictions
            <textarea name="entry.1751303409" placeholder="Any food allergies or preferences?" />
          </label>
          <label>
            Email address
            <input name="entry.443565211" type="email" placeholder="name@example.com" />
          </label>
          <button className="rsvp-card-button" type="submit">
            Submit RSVP
          </button>
          {submitted ? <p className="feedback">Thank you! Your response has been sent.</p> : null}
          <iframe className="google-form-submit-frame" name="google-form-submit" title="Google form submission" />
        </form>
      </div>
    </section>
  );
}
