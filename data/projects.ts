export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  visual: string;
};

export const projects: Project[] = [
  {
    title: "Kinetic Type Lab",
    category: "Interactive Typography",
    year: "2026",
    description: "A browser-based typographic playground where letters respond to cursor movement, rhythm and sound.",
    visual: "kinetic",
  },
  {
    title: "Lumen Garden",
    category: "Generative Web",
    year: "2026",
    description: "A quiet generative landscape that turns live ambient data into shifting fields of light.",
    visual: "lumen",
  },
  {
    title: "Echoes in Motion",
    category: "Creative Coding",
    year: "2025",
    description: "An audiovisual experiment translating recorded voices into particles, waves and spatial movement.",
    visual: "echo",
  },
  {
    title: "Material Memory",
    category: "Digital Art Direction",
    year: "2025",
    description: "A tactile identity system exploring how physical textures can become responsive digital surfaces.",
    visual: "material",
  },
  {
    title: "Playable Archive",
    category: "Interaction Design",
    year: "2025",
    description: "An experimental archive that lets visitors discover cultural objects through play instead of menus.",
    visual: "archive",
  },
  {
    title: "Signal / Noise",
    category: "Data Visualisation",
    year: "2024",
    description: "A visual system for turning complex information streams into readable, human-scale compositions.",
    visual: "signal",
  },
];
