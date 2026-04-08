import { useState } from "react";
import { Settings, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import AccessibilityMenu from "./AccessibilityMenu";
import logo from "@/assets/samarth-vaani-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिन्दी" },
  { value: "bn", label: "বাংলা" },
  { value: "ta", label: "தமிழ்" },
  { value: "te", label: "తెలుగు" },
  { value: "mr", label: "मराठी" },
  { value: "gu", label: "ગુજરાતી" },
  { value: "kn", label: "ಕನ್ನಡ" },
  { value: "ml", label: "മലയാളം" },
  { value: "pa", label: "ਪੰਜਾਬੀ" },
  { value: "or", label: "ଓଡ଼ିଆ" },
];

const disabilities = [
  "Visual Impairment",
  "Hearing Impairment",
  "Locomotor Disability",
  "Intellectual Disability",
  "Mental Illness",
  "Multiple Disabilities",
  "Other",
];

const Header = () => {
  const [showA11y, setShowA11y] = useState(false);
  const { language, setLanguage, disabilityType, setDisabilityType } = useAccessibility();

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SamarthVaani logo" width={40} height={40} className="rounded-lg" />
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">SamarthVaani</h1>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Language */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger
                className="w-auto gap-1 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 text-sm"
                aria-label="Select language"
              >
                <Globe className="h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Disability */}
            <Select value={disabilityType} onValueChange={setDisabilityType}>
              <SelectTrigger
                className="hidden w-auto gap-1 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 text-sm md:flex"
                aria-label="Select type of disability"
              >
                <User className="h-4 w-4" />
                <SelectValue placeholder="Disability Type" />
              </SelectTrigger>
              <SelectContent>
                {disabilities.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Accessibility */}
            <Button
              variant="outline"
              size="icon"
              className="border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Open accessibility options"
              onClick={() => setShowA11y(true)}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <AccessibilityMenu open={showA11y} onClose={() => setShowA11y(false)} />
    </>
  );
};

export default Header;
