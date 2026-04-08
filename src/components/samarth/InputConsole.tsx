import { useState } from "react";
import { Mic, Send, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const InputConsole = () => {
  const [inputMode, setInputMode] = useState<"voice" | "text">("text");
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const { fastMode, setFastMode } = useAccessibility();

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      {/* Fast Mode */}
      <div className="mb-4 flex items-center gap-3">
        <Switch
          checked={fastMode}
          onCheckedChange={setFastMode}
          aria-label="Toggle fast mode"
          id="fast-mode"
        />
        <label htmlFor="fast-mode" className="text-sm font-semibold text-foreground cursor-pointer">
          Fast Mode
        </label>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-xs text-muted-foreground underline decoration-dotted cursor-help">
              What's this?
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm">
            <p><strong>ON:</strong> Direct fast translation.</p>
            <p><strong>OFF:</strong> High-accuracy Indic AI translation (Audio → Text → English).</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Input Mode Toggle */}
      <div className="mb-4 flex rounded-xl bg-muted p-1" role="tablist">
        <button
          role="tab"
          aria-selected={inputMode === "voice"}
          onClick={() => setInputMode("voice")}
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
            inputMode === "voice" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          🎙️ Voice Input
        </button>
        <button
          role="tab"
          aria-selected={inputMode === "text"}
          onClick={() => setInputMode("text")}
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
            inputMode === "text" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          ⌨️ Text Input
        </button>
      </div>

      {/* Input Area */}
      {inputMode === "voice" ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <button
            aria-label={isListening ? "Stop listening" : "Start voice input"}
            onClick={() => setIsListening(!isListening)}
            className={`flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 ${
              isListening ? "animate-mic-pulse" : ""
            }`}
          >
            <Mic className="h-10 w-10" />
          </button>
          <p className="text-sm font-medium text-muted-foreground">
            {isListening ? "Listening… Tap to stop" : "Tap to speak"}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question here… e.g., 'What schemes am I eligible for?'"
            className="min-h-[120px] resize-none text-base"
            aria-label="Type your message"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Read aloud"
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <Button onClick={handleSend} disabled={!message.trim()} aria-label="Send message" className="gap-2">
              <Send className="h-4 w-4" />
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputConsole;
