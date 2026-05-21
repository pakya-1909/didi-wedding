const GOOGLE_FORM_HOST = "docs.google.com";

export const getGoogleFormUrl = (): string | null => {
  const rawValue = import.meta.env.VITE_GOOGLE_FORM_URL;
  const value = typeof rawValue === "string" ? rawValue.trim() : "";
  return value || null;
};

export const toGoogleFormEmbedUrl = (formUrl: string): string => {
  const url = new URL(formUrl);
  if (url.hostname === GOOGLE_FORM_HOST && url.pathname.includes("/forms/")) {
    url.searchParams.set("embedded", "true");
  }
  return url.toString();
};

export const toGoogleFormViewUrl = (formUrl: string): string => {
  const url = new URL(formUrl);
  url.searchParams.delete("embedded");
  return url.toString();
};
