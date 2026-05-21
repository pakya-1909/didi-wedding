export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  dressCode?: string;
  mapLink?: string;
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: "haldi",
    title: "Haldi Ceremony",
    date: "2026-11-20",
    time: "10:30 AM",
    venue: "Family House Courtyard",
    description: "A bright and joyful turmeric ceremony with close family and friends.",
    dressCode: "Yellow or pastel shades"
  },
  {
    id: "mehendi",
    title: "Mehendi",
    date: "2026-11-20",
    time: "6:00 PM",
    venue: "Sunset Lawn",
    description: "Henna, music, dance, and an evening full of celebration.",
    dressCode: "Festive ethnic"
  },
  {
    id: "sangeet",
    title: "Sangeet Night",
    date: "2026-11-21",
    time: "7:30 PM",
    venue: "Grand Ballroom",
    description: "Dance performances and dinner with both families.",
    mapLink: "https://maps.google.com"
  },
  {
    id: "wedding",
    title: "Wedding Ceremony",
    date: "2026-11-22",
    time: "4:00 PM",
    venue: "Royal Garden Venue",
    description: "Traditional wedding rituals followed by dinner reception.",
    dressCode: "Traditional attire"
  }
];
