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
  { key: "dyslexiaFont" as const, label: "Dyslexia Friendly", icon: BookOpen },
  { key: "adhdMode" as const, label: "ADHD Mode", icon: Focus },
  { key: "lowSaturation" as const, label: "Saturation", icon: Droplets },
  { key: "invertColors" as const, label: "Invert Colors", icon: SunMoon },
  { key: "highlightLinks" as const, label: "Highlight Links", icon: Link },
  { key: "customCursor" as const, label: "Cursor", icon: MousePointer },
  { key: "pauseAnimations" as const, label: "Pause Animation", icon: Pause },
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
      <DialogContent className="max-w-lg rounded-2xl border-0 p-0 overflow-hidden">
        {/* Purple gradient header matching reference */}
        <div className="bg-gradient-to-r from-[hsl(262,60%,55%)] to-[hsl(262,60%,65%)] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-bold text-white">Accessibility options</h2>
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white">
              Ctrl+F2
            </span>
          </div>
        </div>

        {/* Grid of options */}
        <div className="grid grid-cols-3 gap-3 p-5">
          {options.map(({ key, label, icon: Icon }) => {
            const active = state[key];
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                aria-pressed={active}
                aria-label={`${label}: ${active ? "on" : "off"}`}
                className={`flex flex-col items-center gap-2.5 rounded-xl border-2 p-4 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active
                    ? "border-[hsl(262,60%,55%)] bg-[hsl(262,60%,55%)]/10 text-[hsl(262,60%,55%)]"
                    : "border-border bg-card text-muted-foreground hover:border-[hsl(262,60%,55%)]/40 hover:shadow-sm"
                }`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.5} />
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
