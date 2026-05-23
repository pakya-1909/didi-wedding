import haldiImage from "../images/haldi_function.jpeg";
import sangeetImage from "../images/sangeet_function.webp";
import weddingImage from "../images/wedding.webp";
import invitationImage from "../images/wedding_invitation.webp";


export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue?: string;
  description?: string;
  image?: string;
  dressCode?: string;
  mapLink?: string;
  invitationDetails?: {
    intro: string;
    groom: string;
    groomParents: string;
    bride: string;
    brideParents: string;
  };
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: "invitation",
    title: "Invitation",
    date: "2026-11-20",
    time: "10:00 AM",
    image: invitationImage,
    invitationDetails: {
      intro: "We request the honour of your gracious presence to the wedding of",
      groom: "Dr. Satyam",
      groomParents: "son of Smt. Mamta Verma & Shri Rajive Raten Verma",
      bride: "Dr. Priyanka",
      brideParents: "daughter of Smt. Meera & Shri Rajjan"
    }
  },
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
    time: "4:00 PM Onwards",
    venue: "SAS One Farms",
    // description: "Traditional wedding rituals followed by dinner reception.",
    image: weddingImage,
    mapLink: "https://share.google/AiWlUpbO9el3wMYz3"
    // dressCode: "Traditional attire"
  }
];
