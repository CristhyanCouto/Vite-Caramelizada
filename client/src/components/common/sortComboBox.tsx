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

function SortComboBoxMovies({
  sortValue,
  setSortValue,
}: {
  sortValue: string;
  setSortValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState(""); // Estado para a busca

  const { t } = useTranslation();

  const sorts = [
    {
      value: "myRatingPlus",
      label: `${t("sortComboBox.myRating")} +`,
    },
    {
      value: "myRatingMinus",
      label: `${t("sortComboBox.myRating")} -`,
    },
    {
      value: "alphabeticalPlus",
      label: `${t("sortComboBox.alphabetical")} +`,
    },
    {
      value: "alphabeticalMinus",
      label: `${t("sortComboBox.alphabetical")} -`,
    },
    {
      value: "releaseDatePlus",
      label: `${t("sortComboBox.releaseDate")} +`,
    },
    {
      value: "releaseDateMinus",
      label: `${t("sortComboBox.releaseDate")} -`,
    },
  ];

  // Filtra os sorts baseado no searchQuery
  const filteredSorts = sorts.filter((sort) =>
    sort.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {sortValue
            ? sorts.find((sort) => sort.value === sortValue)?.label
            : `${t("sortComboBox.selectSort")}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <input
            type="text"
            placeholder={`${t("sortComboBox.search")}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 text-sm border-b outline-none"
          />
          <CommandList>
            <CommandEmpty>{t("sortComboBox.noSearchResults")}.</CommandEmpty>
            <CommandGroup>
              {filteredSorts.map((sort) => (
                <CommandItem
                  key={sort.value}
                  value={sort.value}
                  onSelect={(currentValue) => {
                    setSortValue(
                      currentValue === sortValue ? "" : currentValue
                    );
                    setOpen(false);
                    setSearchQuery(""); // clear search query
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortValue === sort.value ? "opacity-100" : "opacity-0"
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

export { SortComboBoxMovies };
