import { Routespath } from "./routes";
import { MotionConfig } from "motion/react";
import { useAccessibility } from "../contexts/AccessibilityContext";

export default function App() {
  const { animationsEnabled } = useAccessibility();

  return (
    <MotionConfig reducedMotion={animationsEnabled ? "user" : "always"}>
      <Routespath />
    </MotionConfig>
  );
}
