import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SOSButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating SOS Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Need help? Contact a local NGO"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-sos px-5 py-3.5 text-sos-foreground font-bold shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sos/50"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">Need Help?</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-sos" />
              Connect with Support
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Would you like the contact number for a local NGO in your city that can help you file your application or claim your rights? We're here to help.
            </p>
            <div className="rounded-xl bg-success/10 border border-success/20 p-4">
              <p className="text-sm font-semibold text-foreground mb-2">📞 Helpline Numbers</p>
              <ul className="space-y-1.5 text-sm text-foreground">
                <li><strong>National Disability Helpline:</strong> 1800-11-5555</li>
                <li><strong>UDID Support:</strong> 1800-572-1122</li>
                <li><strong>Women's Helpline:</strong> 181</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-success hover:bg-success/90 text-success-foreground" aria-label="Find a local NGO">
                Find Local NGO
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)} aria-label="Close help dialog">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SOSButton;
