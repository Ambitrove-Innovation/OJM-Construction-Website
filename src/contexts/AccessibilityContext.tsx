import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AccessibilityContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  // Read initial state from localStorage, default strictly to true if missing
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("ojm_animation_pref");
    if (saved !== null) {
      return saved === "true";
    }
    return true; // Enabled by default
  });

  // Whenever the state changes, save to localStorage and manipulate the DOM
  useEffect(() => {
    localStorage.setItem("ojm_animation_pref", String(animationsEnabled));

    if (!animationsEnabled) {
      // If disabled, manually inject the strictly reduced motion override class
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [animationsEnabled]);

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

// Custom hook for simple usage anywhere in the app
export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
