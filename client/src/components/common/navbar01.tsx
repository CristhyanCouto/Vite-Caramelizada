import { Button } from "../ui/button";
import SearchPage from "./searchPage";
import LanguageSelect from "./languageSelect";
import { Link } from "react-router-dom";
import DrawerMenu from "./drawerMenu";

function LinkToHome () {
    return (
        <Link to="/">
            <Button className="bg-red-500 hover:bg-red-400">Caramelizada</Button>
        </Link>
    )
}

export default function Navbar01() {
  return (
    <div className="bg-zinc-900 flex flex-cols-1 items-center justify-between py-4 px-12">
        <div className="flex items-center gap-2">
            <LinkToHome />
            <DrawerMenu />
        </div>
        <div className="w-[70%]">
            <SearchPage />
        </div>
        <div className="flex items-center text-center">
            <LanguageSelect />
        </div>
    </div>
  )
}
