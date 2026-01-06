import {
  BookOpen,
  Sprout,
  Monitor,
  CloudSun,
  Palette,
  Bus,
  Tv,
  Utensils,
} from "lucide-react";

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const facilities: Facility[] = [
  {
    id: "storytelling-cottage",
    title: "Storytelling Cottage",
    description:
      "A cozy corner filled with colorful books where stories come alive.",
    icon: BookOpen,
  },
  {
    id: "nature-lab",
    title: "Eco Learning Lab",
    description:
      "A place to explore nature, plants, and little wonders of the world.",
    icon: Sprout,
  },
  {
    id: "digital-corner",
    title: "Digital Corner",
    description:
      "Friendly computers to help little ones take their first digital steps.",
    icon: Monitor,
  },
  {
    id: "green-meadows",
    title: "Green Meadows",
    description:
      "Open grassy fields for running, playing, and making new friends.",
    icon: CloudSun,
  },
  {
    id: "creative-hut",
    title: "Creative Arts Hut",
    description:
      "A colorful space for painting, crafting, and expressing big imaginations.",
    icon: Palette,
  },
  {
    id: "yellow-bus",
    title: "Yellow Bus Service",
    description:
      "Our happy yellow buses ensuring a safe ride from home to school.",
    icon: Bus,
  },
  {
    id: "smart-village",
    title: "Audio-Visual Room",
    description: "Fun learning with videos and animations on big screens.",
    icon: Tv,
  },
  {
    id: "grandmas-kitchen",
    title: "Healthy Bites",
    description:
      "Fresh, yummy, and nutritious meals to keep little tummies full.",
    icon: Utensils,
  },
];
