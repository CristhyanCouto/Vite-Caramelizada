import { GrLanguage } from "react-icons/gr";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import i18n from "@/lib/i18n/i18n";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import React, { useEffect } from "react";

export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>
      <Select value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value)}>
        <SelectTrigger className="text-2xl text-white bg-zinc-900 border-none flex items-center">
          <GrLanguage />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt">
            <div className="flex text-center items-center gap-2">
              <GiBrazilFlag />
              <p>Português</p>
            </div>
          </SelectItem>
          <SelectItem value="en">
            <div className="flex text-center items-center gap-2">
              <LiaFlagUsaSolid /> <p>English</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
