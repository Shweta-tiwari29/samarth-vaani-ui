import {
  Type, ALargeSmall, Space, MoveVertical, BookOpen, Focus,
  Droplets, SunMoon, Link, MousePointer, Pause, ImageOff,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAccessibility } from "@/contexts/AccessibilityContext";

const options = [
  { key: "biggerText" as const, label: "Bigger Text", icon: ALargeSmall },
  { key: "smallerText" as const, label: "Smaller Text", icon: Type },
  { key: "textSpacing" as const, label: "Text Spacing", icon: Space },
  { key: "lineHeight" as const, label: "Line Height", icon: MoveVertical },
  { key: "dyslexiaFont" as const, label: "Dyslexia Font", icon: BookOpen },
  { key: "adhdMode" as const, label: "ADHD Mode", icon: Focus },
  { key: "lowSaturation" as const, label: "Saturation", icon: Droplets },
  { key: "invertColors" as const, label: "Invert Colors", icon: SunMoon },
  { key: "highlightLinks" as const, label: "Highlight Links", icon: Link },
  { key: "customCursor" as const, label: "Custom Cursor", icon: MousePointer },
  { key: "pauseAnimations" as const, label: "Pause Animations", icon: Pause },
  { key: "hideImages" as const, label: "Hide Images", icon: ImageOff },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const AccessibilityMenu = ({ open, onClose }: Props) => {
  const { state, toggle } = useAccessibility();

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Accessibility Options</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {options.map(({ key, label, icon: Icon }) => {
            const active = state[key];
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                aria-pressed={active}
                aria-label={`${label}: ${active ? "on" : "off"}`}
                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                <Icon className="h-6 w-6" />
                {label}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityMenu;
