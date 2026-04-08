import { useState } from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const disabilities = [
  "Visual Impairment",
  "Hearing Impairment",
  "Locomotor Disability",
  "Intellectual Disability",
  "Mental Illness",
  "Multiple Disabilities",
  "Other",
];

const ProfileMenu = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disability, setDisability] = useState("");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-primary-foreground/30 bg-primary text-primary-foreground hover:bg-primary-foreground/10"
          aria-label="Open profile"
        >
          <User className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end">
        <div className="space-y-3">
          <h3 className="font-bold text-foreground text-sm">My Profile</h3>
          <div className="space-y-2">
            <Label htmlFor="profile-name" className="text-xs">Name</Label>
            <Input
              id="profile-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-age" className="text-xs">Age</Label>
            <Input
              id="profile-age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Your age"
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Disability Type</Label>
            <Select value={disability} onValueChange={setDisability}>
              <SelectTrigger className="h-8 text-sm">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {disabilities.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button size="sm" className="w-full text-xs">Save Profile</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileMenu;
