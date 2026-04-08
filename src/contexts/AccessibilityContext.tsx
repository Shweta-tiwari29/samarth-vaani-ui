import React, { createContext, useContext, useState, useCallback } from "react";

interface AccessibilityState {
  biggerText: boolean;
  smallerText: boolean;
  textSpacing: boolean;
  lineHeight: boolean;
  dyslexiaFont: boolean;
  adhdMode: boolean;
  lowSaturation: boolean;
  invertColors: boolean;
  highlightLinks: boolean;
  customCursor: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
}

interface AccessibilityContextType {
  state: AccessibilityState;
  toggle: (key: keyof AccessibilityState) => void;
  language: string;
  setLanguage: (lang: string) => void;
  disabilityType: string;
  setDisabilityType: (type: string) => void;
  fastMode: boolean;
  setFastMode: (v: boolean) => void;
}

const defaults: AccessibilityState = {
  biggerText: false,
  smallerText: false,
  textSpacing: false,
  lineHeight: false,
  dyslexiaFont: false,
  adhdMode: false,
  lowSaturation: false,
  invertColors: false,
  highlightLinks: false,
  customCursor: false,
  pauseAnimations: false,
  hideImages: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be within provider");
  return ctx;
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AccessibilityState>(defaults);
  const [language, setLanguage] = useState("en");
  const [disabilityType, setDisabilityType] = useState("");
  const [fastMode, setFastMode] = useState(true);

  const toggle = useCallback((key: keyof AccessibilityState) => {
    setState((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (key === "biggerText" && next.biggerText) next.smallerText = false;
      if (key === "smallerText" && next.smallerText) next.biggerText = false;
      return next;
    });
  }, []);

  const classes = [
    state.biggerText && "text-bigger",
    state.smallerText && "text-smaller",
    state.textSpacing && "text-spacing-wide",
    state.lineHeight && "line-height-tall",
    state.dyslexiaFont && "dyslexia-font",
    state.invertColors && "invert-colors",
    state.lowSaturation && "low-saturation",
    state.highlightLinks && "highlight-links",
    state.customCursor && "custom-cursor",
    state.pauseAnimations && "pause-animations",
    state.hideImages && "hide-images",
  ].filter(Boolean).join(" ");

  return (
    <AccessibilityContext.Provider value={{ state, toggle, language, setLanguage, disabilityType, setDisabilityType, fastMode, setFastMode }}>
      <div className={classes}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
