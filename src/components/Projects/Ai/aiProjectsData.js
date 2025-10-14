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
];
