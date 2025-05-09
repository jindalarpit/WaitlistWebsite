import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion } from "framer-motion";

// Make framer-motion available globally for smoother animations
motion.prefersReducedMotion = false;

createRoot(document.getElementById("root")!).render(<App />);
