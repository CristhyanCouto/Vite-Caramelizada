import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { GrLanguage } from "react-icons/gr";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Button } from "../ui/button";
import i18n from "@/lib/i18n/i18n";

export default function LanguageSelect() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-2xl text-white flex items-center">
          <GrLanguage />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-4">
          <DropdownMenuItem className="flex justify-start align-center text-center- items-center">
            <Button 
            onClick={() => i18n.changeLanguage('pt') }
            className="bg-transparent hover:bg-transparent text-black">
                <GiBrazilFlag /> <p>Português</p>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-start align-center text-center- items-center">
            <Button 
            onClick={() => i18n.changeLanguage('en')}
            className="bg-transparent hover:bg-transparent text-black">
                <LiaFlagUsaSolid /> <p>English</p>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
        <DropdownMenuSeparator />
      </DropdownMenu>
    </div>
  );
}
