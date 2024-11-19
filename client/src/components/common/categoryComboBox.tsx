"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslation } from "react-i18next";
import { PlataformsType } from "@/lib/games";
import axios from "axios";

function CategoryComboBoxMovies({
  sortValue,
  setSortValue,
}: {
  sortValue: string[];
  setSortValue: (value: string[]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  //Genre list
  const { t } = useTranslation();

  const sorts = [
    { value: "1", label: `${t("genre.2.5d")}` },
    { value: "2", label: `${t("genre.2d")}` },
    { value: "3", label: `${t("genre.3d")}` },
    { value: "5", label: `${t("genre.animation")}` },
    { value: "7", label: `${t("genre.adventure")}` },
    { value: "8", label: `${t("genre.action")}` },
    { value: "9", label: `${t("genre.basedOnRealLife")}` },
    { value: "14", label: `${t("genre.comedy")}` },
    { value: "15", label: `${t("genre.racing")}` },
    { value: "16", label: `${t("genre.crime")}` },
    { value: "17", label: `${t("genre.culinary")}` },
    { value: "18", label: `${t("genre.shortFilm")}` },
    { value: "19", label: `${t("genre.cyberpunk")}` },
    { value: "20", label: `${t("genre.docufiction")}` },
    { value: "21", label: `${t("genre.documentary")}` },
    { value: "22", label: `${t("genre.drama")}` },
    { value: "24", label: `${t("genre.educational")}` },
    { value: "25", label: `${t("genre.espionage")}` },
    { value: "26", label: `${t("genre.sports")}` },
    { value: "28", label: `${t("genre.fantasy")}` },
    { value: "29", label: `${t("genre.western")}` },
    { value: "30", label: `${t("genre.scienceFiction")}` },
    { value: "32", label: `${t("genre.stealth")}` },
    { value: "34", label: `${t("genre.war")}` },
    { value: "36", label: `${t("genre.horror")}` },
    { value: "37", label: `${t("genre.darkHumor")}` },
    { value: "38", label: `${t("genre.indie")}` },
    { value: "41", label: `${t("genre.longFilm")}` },
    { value: "42", label: `${t("genre.fight")}` },
    { value: "43", label: `${t("genre.mafia")}` },
    { value: "44", label: `${t("genre.mistery")}` },
    { value: "48", label: `${t("genre.musicals")}` },
    { value: "50", label: `${t("genre.policeLiterature")}` },
    { value: "53", label: `${t("genre.romance")}` },
    { value: "58", label: `${t("genre.sitcom")}` },
    { value: "60", label: `${t("genre.survival")}` },
    { value: "61", label: `${t("genre.superHero")}` },
    { value: "62", label: `${t("genre.suspense")}` },
    { value: "64", label: `${t("genre.terror")}` },
    { value: "65", label: `${t("genre.thriller")}` },
    { value: "69", label: `${t("genre.zombie")}` },
    { value: "70", label: `${t("genre.steamPunk")}` },
    { value: "71", label: `${t("genre.postApocalypticFiction")}` },
  ];

  const filteredSorts = sorts.filter((sort) =>
    sort.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (currentValue: string) => {
    const newSortValue = sortValue.includes(currentValue)
      ? sortValue.filter((value) => value !== currentValue)
      : sortValue.length < 5
      ? [...sortValue, currentValue]
      : sortValue;

    setSortValue(newSortValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {t("sortComboBox.genres")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <div className="relative">
            <input
              type="text"
              placeholder={`${t("sortComboBox.search")}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border-b outline-none"
            />
            <Button
              className="w-2 h-6 shrink-0 opacity-50
            fixed top-[2%] left-[80%] right-0"
              onClick={() => setSortValue([])}
            >
              x
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>{t("sortComboBox.noSearchResults")}.</CommandEmpty>
            <CommandGroup>
              {filteredSorts
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((sort) => (
                  <CommandItem
                    key={sort.value}
                    value={sort.value}
                    onSelect={() => sort.value && handleSelect(sort.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        sort.value && sortValue.includes(sort.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {sort.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function CategoryComboBoxGames({
  sortValue,
  setSortValue,
}: {
  sortValue: string[];
  setSortValue: (value: string[]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  //Genre list

  const { t } = useTranslation();

  const sorts = [
    {
      value: "1",
      label: `${t("genre.2.5d")}`,
    },
    {
      value: "2",
      label: `${t("genre.2d")}`,
    },
    {
      value: "3",
      label: `${t("genre.3d")}`,
    },
    {
      value: "4",
      label: `${t("genre.advergames")}`,
    },
    {
      value: "5",
      label: `${t("genre.animation")}`,
    },
    {
      value: "6",
      label: `${t("genre.arcade")}`,
    },
    {
      value: "7",
      label: `${t("genre.adventure")}`,
    },
    {
      value: "8",
      label: `${t("genre.action")}`,
    },
    {
      value: "9",
      label: `${t("genre.basedOnRealLife")}`,
    },
    {
      value: "10",
      label: `${t("genre.battleRoyale")}`,
    },
    {
      value: "11",
      label: `${t("genre.beatEmUp")}`,
    },
    {
      value: "12",
      label: `${t("genre.cards")}`,
    },
    {
      value: "13",
      label: `${t("genre.casual")}`,
    },
    {
      value: "14",
      label: `${t("genre.comedy")}`,
    },
    {
      value: "15",
      label: `${t("genre.racing")}`,
    },
    {
      value: "16",
      label: `${t("genre.crime")}`,
    },
    {
      value: "17",
      label: `${t("genre.culinary")}`,
    },
    {
      value: "18",
      label: `${t("genre.shortFilm")}`,
    },
    {
      value: "19",
      label: `${t("genre.cyberpunk")}`,
    },
    {
      value: "20",
      label: `${t("genre.docufiction")}`,
    },
    {
      value: "21",
      label: `${t("genre.documentary")}`,
    },
    {
      value: "22",
      label: `${t("genre.drama")}`,
    },
    {
      value: "23",
      label: `${t("genre.dungeonCrawler")}`,
    },
    {
      value: "24",
      label: `${t("genre.educational")}`,
    },
    {
      value: "25",
      label: `${t("genre.espionage")}`,
    },
    {
      value: "26",
      label: `${t("genre.sports")}`,
    },
    {
      value: "27",
      label: `${t("genre.strategy")}`,
    },
    {
      value: "28",
      label: `${t("genre.fantasy")}`,
    },
    {
      value: "29",
      label: `${t("genre.western")}`,
    },
    {
      value: "30",
      label: `${t("genre.scienceFiction")}`,
    },
    {
      value: "31",
      label: `${t("genre.fps")}`,
    },
    {
      value: "32",
      label: `${t("genre.stealth")}`,
    },
    {
      value: "33",
      label: `${t("genre.soccer")}`,
    },
    {
      value: "34",
      label: `${t("genre.war")}`,
    },
    {
      value: "35",
      label: `${t("genre.hackAndSlash")}`,
    },
    {
      value: "36",
      label: `${t("genre.horror")}`,
    },
    {
      value: "37",
      label: `${t("genre.darkHumor")}`,
    },
    {
      value: "38",
      label: `${t("genre.indie")}`,
    },
    {
      value: "39",
      label: `${t("genre.jrpg")}`,
    },
    {
      value: "40",
      label: `${t("genre.maze")}`,
    },
    {
      value: "41",
      label: `${t("genre.longFilm")}`,
    },
    {
      value: "42",
      label: `${t("genre.fight")}`,
    },
    {
      value: "43",
      label: `${t("genre.mafia")}`,
    },
    {
      value: "44",
      label: `${t("genre.mistery")}`,
    },
    {
      value: "45",
      label: `${t("genre.mmo")}`,
    },
    {
      value: "46",
      label: `${t("genre.moba")}`,
    },
    {
      value: "47",
      label: `${t("genre.openWorld")}`,
    },
    {
      value: "48",
      label: `${t("genre.musicals")}`,
    },
    {
      value: "49",
      label: `${t("genre.platform")}`,
    },
    {
      value: "50",
      label: `${t("genre.policeLiterature")}`,
    },
    {
      value: "51",
      label: `${t("genre.puzzle")}`,
    },
    {
      value: "52",
      label: `${t("genre.roguelike")}`,
    },
    {
      value: "53",
      label: `${t("genre.romance")}`,
    },
    {
      value: "54",
      label: `${t("genre.rpg")}`,
    },
    {
      value: "55",
      label: `${t("genre.shotEmUp")}`,
    },
    {
      value: "56",
      label: `${t("genre.shonen")}`,
    },
    {
      value: "57",
      label: `${t("genre.simulation")}`,
    },
    {
      value: "58",
      label: `${t("genre.sitcom")}`,
    },
    {
      value: "59",
      label: `${t("genre.skate")}`,
    },
    {
      value: "60",
      label: `${t("genre.survival")}`,
    },
    {
      value: "61",
      label: `${t("genre.superHero")}`,
    },
    {
      value: "62",
      label: `${t("genre.suspense")}`,
    },
    {
      value: "63",
      label: `${t("genre.boardGames")}`,
    },
    {
      value: "64",
      label: `${t("genre.terror")}`,
    },
    {
      value: "65",
      label: `${t("genre.thriller")}`,
    },
    {
      value: "66",
      label: `${t("genre.towerDefense")}`,
    },
    {
      value: "67",
      label: `${t("genre.tps")}`,
    },
    {
      value: "68",
      label: `${t("genre.turns")}`,
    },
    {
      value: "69",
      label: `${t("genre.zombie")}`,
    },
    { value: "72", label: `${t("genre.realTimeStrategy")}` },
  ];

  const filteredSorts = sorts.filter((sort) =>
    sort.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (currentValue: string) => {
    const newSortValue = sortValue.includes(currentValue)
      ? sortValue.filter((value) => value !== currentValue)
      : sortValue.length < 5
      ? [...sortValue, currentValue]
      : sortValue;

    setSortValue(newSortValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {" "}
          {t("sortComboBox.selectGenre")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <div className="relative">
            <input
              type="text"
              placeholder={`${t("sortComboBox.search")}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border-b outline-none"
            />
            <Button
              className="w-2 h-6 shrink-0 opacity-50
            fixed top-[2%] left-[80%] right-0"
              onClick={() => setSortValue([])}
            >
              x
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>{t("sortComboBox.noSearchResults")}.</CommandEmpty>
            <CommandGroup>
              {filteredSorts.map((sort) => (
                <CommandItem
                  key={sort.value}
                  value={sort.value}
                  onSelect={() => sort.value && handleSelect(sort.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sort.value && sortValue.includes(sort.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {sort.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function MultiplayerComboBoxGames({
  sortValue,
  setSortValue,
}: {
  sortValue: string[];
  setSortValue: (value: string[]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  //Genre list

  const { t } = useTranslation();

  const sorts = [
    { value: "0", label: `${t("games.singlePlayer")}` },
    {
      value: "1",
      label: `${t("games.multiPlayer")}`,
    },
    {
      value: "2",
      label: `${t("games.multiplayerLocal")}`,
    },
  ];

  const filteredSorts = sorts.filter((sort) =>
    sort.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (currentValue: string) => {
    const newSortValue = sortValue.includes(currentValue)
      ? sortValue.filter((value) => value !== currentValue)
      : sortValue.length < 3
      ? [...sortValue, currentValue]
      : sortValue;

    setSortValue(newSortValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {" "}
          {t("sortComboBox.selectMultiplayer")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <div className="relative">
            <input
              type="text"
              placeholder={`${t("sortComboBox.search")}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border-b outline-none"
            />
            <Button
              className="w-2 h-6 shrink-0 opacity-50
            fixed top-[2%] left-[80%] right-0"
              onClick={() => setSortValue([])}
            >
              x
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>{t("sortComboBox.noSearchResults")}.</CommandEmpty>
            <CommandGroup>
              {filteredSorts.map((sort) => (
                <CommandItem
                  key={sort.value}
                  value={sort.value}
                  onSelect={() => handleSelect(sort.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortValue.includes(sort.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {sort.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function PlataformsComboBoxGames({
  sortValue,
  setSortValue,
}: {
  sortValue: string[];
  setSortValue: (value: string[]) => void;
}) {
  const [plataform, setPlataform] = React.useState<PlataformsType[]>([]);
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3001/plataforms").then((response) => {
      setPlataform(response.data);
    });
  }, []);

  //Genre list

  const { t } = useTranslation();

  // Mapear plataformas dinamicamente para a lista de sorts
  const sorts = plataform
    .sort((a, b) => a.name_plataform.localeCompare(b.name_plataform))
    .map((plat) => ({
      value: String(plat.idplataform), // Assumindo que "id" é o identificador da plataforma
      label: plat.name_plataform, // Assumindo que "name" é o nome da plataforma
    }));

  const filteredSorts = sorts.filter((sort) =>
    sort.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (currentValue: string) => {
    const newSortValue = sortValue.includes(currentValue)
      ? sortValue.filter((value) => value !== currentValue)
      : sortValue.length < 5
      ? [...sortValue, currentValue]
      : sortValue;

    setSortValue(newSortValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open}>
          {t("sortComboBox.selectPlatform")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <div className="relative">
            <input
              type="text"
              placeholder={`${t("sortComboBox.search")}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border-b outline-none"
            />
            <Button
              className="w-2 h-6 shrink-0 opacity-50
            fixed top-[2%] left-[80%] right-0"
              onClick={() => setSortValue([])}
            >
              x
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>{t("sortComboBox.noSearchResults")}.</CommandEmpty>
            <CommandGroup>
              {filteredSorts.map((sort) => (
                <CommandItem
                  key={sort.value}
                  value={sort.value}
                  onSelect={() => handleSelect(sort.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortValue.includes(sort.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {sort.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function CategoryComboBoxAnimes({
  sortValue,
  setSortValue,
}: {
  sortValue: string[];
  setSortValue: (value: string[]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  //Genre list
  const { t } = useTranslation();

  const sorts = [
    { value: "1", label: `${t("genre.2.5d")}` },
    { value: "2", label: `${t("genre.2d")}` },
    { value: "3", label: `${t("genre.3d")}` },
    { value: "5", label: `${t("genre.animation")}` },
    { value: "7", label: `${t("genre.adventure")}` },
    { value: "8", label: `${t("genre.action")}` },
    { value: "9", label: `${t("genre.basedOnRealLife")}` },
    { value: "14", label: `${t("genre.comedy")}` },
    { value: "15", label: `${t("genre.racing")}` },
    { value: "16", label: `${t("genre.crime")}` },
    { value: "17", label: `${t("genre.culinary")}` },
    { value: "18", label: `${t("genre.shortFilm")}` },
    { value: "19", label: `${t("genre.cyberpunk")}` },
    { value: "20", label: `${t("genre.docufiction")}` },
    { value: "21", label: `${t("genre.documentary")}` },
    { value: "22", label: `${t("genre.drama")}` },
    { value: "24", label: `${t("genre.educational")}` },
    { value: "25", label: `${t("genre.espionage")}` },
    { value: "26", label: `${t("genre.sports")}` },
    { value: "28", label: `${t("genre.fantasy")}` },
    { value: "29", label: `${t("genre.western")}` },
    { value: "30", label: `${t("genre.scienceFiction")}` },
    { value: "32", label: `${t("genre.stealth")}` },
    { value: "34", label: `${t("genre.war")}` },
    { value: "36", label: `${t("genre.horror")}` },
    { value: "37", label: `${t("genre.darkHumor")}` },
    { value: "38", label: `${t("genre.indie")}` },
    { value: "41", label: `${t("genre.longFilm")}` },
    { value: "42", label: `${t("genre.fight")}` },
    { value: "43", label: `${t("genre.mafia")}` },
    { value: "44", label: `${t("genre.mistery")}` },
    { value: "48", label: `${t("genre.musicals")}` },
    { value: "50", label: `${t("genre.policeLiterature")}` },
    { value: "53", label: `${t("genre.romance")}` },
    { value: "58", label: `${t("genre.sitcom")}` },
    { value: "60", label: `${t("genre.survival")}` },
    { value: "61", label: `${t("genre.superHero")}` },
    { value: "62", label: `${t("genre.suspense")}` },
    { value: "64", label: `${t("genre.terror")}` },
    { value: "65", label: `${t("genre.thriller")}` },
    { value: "69", label: `${t("genre.zombie")}` },
    { value: "70", label: `${t("genre.steamPunk")}` },
    { value: "71", label: `${t("genre.postApocalypticFiction")}` },
  ];

  const filteredSorts = sorts.filter((sort) =>
    sort.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (currentValue: string) => {
    const newSortValue = sortValue.includes(currentValue)
      ? sortValue.filter((value) => value !== currentValue)
      : sortValue.length < 5
      ? [...sortValue, currentValue]
      : sortValue;

    setSortValue(newSortValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {t("sortComboBox.genres")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <div className="relative">
            <input
              type="text"
              placeholder={`${t("sortComboBox.search")}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border-b outline-none"
            />
            <Button
              className="w-2 h-6 shrink-0 opacity-50
            fixed top-[2%] left-[80%] right-0"
              onClick={() => setSortValue([])}
            >
              x
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>{t("sortComboBox.noSearchResults")}.</CommandEmpty>
            <CommandGroup>
              {filteredSorts
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((sort) => (
                  <CommandItem
                    key={sort.value}
                    value={sort.value}
                    onSelect={() => sort.value && handleSelect(sort.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        sort.value && sortValue.includes(sort.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {sort.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export {
  CategoryComboBoxMovies,
  CategoryComboBoxGames,
  MultiplayerComboBoxGames,
  PlataformsComboBoxGames,
  CategoryComboBoxAnimes,
};
