import { useState } from "react";
import { Settings, Globe, Minus, Plus, Eye, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import AccessibilityMenu from "./AccessibilityMenu";
import ProfileMenu from "./ProfileMenu";
import logo from "@/assets/samarth-vaani-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

const Header = () => {
  const [showA11y, setShowA11y] = useState(false);
  const { language, setLanguage, state, toggle } = useAccessibility();
  const [inputLang, setInputLang] = useState("hi");
  const [outputLang, setOutputLang] = useState("en");
  const [highContrast, setHighContrast] = useState(false);
  const [readerSpeed, setReaderSpeed] = useState([1]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SamarthVaani logo" width={40} height={40} className="rounded-lg" />
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">SamarthVaani</h1>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Font Size A-/A+ */}
            <div className="hidden items-center gap-0.5 md:flex">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 text-xs font-bold"
                aria-label="Decrease font size"
                onClick={() => {
                  if (!state.smallerText) toggle("smallerText");
                }}
              >
                <span className="flex items-center text-xs">A<Minus className="h-3 w-3" /></span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 text-xs font-bold"
                aria-label="Increase font size"
                onClick={() => {
                  if (!state.biggerText) toggle("biggerText");
                }}
              >
                <span className="flex items-center text-xs">A<Plus className="h-3 w-3" /></span>
              </Button>
            </div>

            {/* High Contrast */}
            <div className="hidden items-center gap-1 md:flex">
              <Button
                variant="outline"
                size="icon"
                className={`h-8 w-8 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 ${highContrast ? "ring-2 ring-accent" : ""}`}
                aria-label="Toggle high contrast mode"
                aria-pressed={highContrast}
                onClick={() => {
                  setHighContrast(!highContrast);
                  toggle("invertColors");
                }}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            {/* Screen Reader Speed */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="hidden h-8 w-8 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 md:flex"
                  aria-label="Screen reader speed"
                >
                  <Gauge className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56" align="end">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground">Reader Speed: {readerSpeed[0]}x</p>
                  <Slider
                    value={readerSpeed}
                    onValueChange={setReaderSpeed}
                    min={0.5}
                    max={2}
                    step={0.25}
                    aria-label="Adjust screen reader speed"
                  />
                </div>
              </PopoverContent>
            </Popover>

            {/* Input Language */}
            <Select value={inputLang} onValueChange={setInputLang}>
              <SelectTrigger
                className="w-auto gap-1 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 text-xs h-8"
                aria-label="Input language"
              >
                <span className="hidden md:inline text-[10px] opacity-70">IN:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Output Language */}
            <Select value={outputLang} onValueChange={setOutputLang}>
              <SelectTrigger
                className="w-auto gap-1 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10 text-xs h-8"
                aria-label="Output language"
              >
                <span className="hidden md:inline text-[10px] opacity-70">OUT:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Accessibility */}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Open accessibility options"
              onClick={() => setShowA11y(true)}
            >
              <Settings className="h-4 w-4" />
            </Button>

            {/* Profile */}
            <ProfileMenu />
          </div>
        </div>
      </header>

      <AccessibilityMenu open={showA11y} onClose={() => setShowA11y(false)} />
    </>
  );
};

export default Header;
