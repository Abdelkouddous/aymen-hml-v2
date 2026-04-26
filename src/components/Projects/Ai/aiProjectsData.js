import kertasPaleographerImg from "../../../Assets/kertas-paleographer.png";

export const aiProjectsData = [
  {
    id: "arabic-manuscripts-ml",
    title: "KERTAS Paleographer",
    summary:
      " Machine Learning Model to Date Arabic Manuscripts Handwriting-based dating model for Arabic manuscripts using KERTAS; Maximum 92% accuracy with AdaBoost.",
    dataset: "KERTAS",
    technologies: ["MATLAB (Freeman chain feature extraction)", "Python"],
    methods: [
      "Gradient scale",
      "PolyGradient",
      "AdaBoost",
      "SVM",
      "Random Forest",
    ],
    libraries: ["scikit-learn", "seaborn", "matplotlib", "numpy", "pandas"],
    result: "92% accuracy using AdaBoost",
    imgPath: kertasPaleographerImg,
    ghLink: "https://github.com/Abdelkouddous/Kertas-paleographer",
    demoLink: "https://kertas-paleographer.streamlit.app/",
  },
  {
    id: "tiebraker-ai",
    title: "TieBraker — AI Decision Assistant",
    summary:
      "An AI-powered decision-making assistant that helps users break ties and make better choices. Built with Google AI Studio using the Gemini API, enabling conversational AI reasoning to evaluate options, weigh trade-offs, and deliver clear recommendations.",
    dataset: "User-defined decision scenarios (no fixed dataset)",
    technologies: ["TypeScript", "React", "Vite", "Gemini API"],
    methods: [
      "Conversational AI reasoning",
      "Options comparison",
      "Trade-off analysis",
      "LLM-guided recommendation",
    ],
    libraries: ["Google Generative AI SDK", "Vite", "CSS Modules"],
    result: "Real-time AI-powered decision support via Gemini Pro",
    ghLink: "https://github.com/Abdelkouddous/TieBraker",
    aiStudioLink: "https://ai.studio/apps/78eb7223-4d86-4726-9865-a3d63a1bf013",
    builtWith: "Google AI Studio",
  },
];

