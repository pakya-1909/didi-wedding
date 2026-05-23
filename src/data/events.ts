import haldiImage from "../images/haldi_function.webp";
import sangeetImage from "../images/sangeet_function.webp";
import weddingImage from "../images/wedding.jpeg";
import mehendiImage2 from "../images/mehendi_function.webp";

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description?: string;
  image?: string;
  dressCode?: string;
  mapLink?: string;
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: "haldi",
    title: "Haldi Ceremony",
    date: "2026-11-22",
    time: "11:00 AM to 2:00 PM",
    venue: "SAS One Farms",
    // description: "A bright and joyful turmeric ceremony with close family and friends.",
    image: haldiImage,
    // dressCode: "Yellow or pastel shades",
    mapLink: "https://share.google/AiWlUpbO9el3wMYz3"
  },
  {
    id: "mehendi",
    title: "Mehendi",
    date: "2026-11-20",
    time: "6:00 PM",
    venue: "SAS One Farms",
    // description: "Henna, music, dance, and an evening full of celebration.",
    image: mehendiImage2,
    // dressCode: "Festive ethnic"
  },
  {
    id: "sangeet",
    title: "Sangeet Night",
    date: "2026-11-21",
    time: "7:00 PM Onwards",
    venue: "SAS One Farms",
    // description: "Dance performances and dinner with both families.",
    image: sangeetImage,
    mapLink: "https://share.google/AiWlUpbO9el3wMYz3"
  },
  {
    id: "wedding",
    title: "Wedding Ceremony",
    date: "2026-11-22",
    time: "4:00 PM",
    venue: "SAS One Farms",
    // description: "Traditional wedding rituals followed by dinner reception.",
    image: weddingImage,
    mapLink: "https://share.google/AiWlUpbO9el3wMYz3"
    // dressCode: "Traditional attire"
  }
];
