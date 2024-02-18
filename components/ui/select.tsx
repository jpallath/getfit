"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type DropdownItemProps = {
  dropdownitemObject: DropdownItemObject;
  index: number;
  setSelected: Function;
  setActive: Function;
};

type DropdownItemObject = {
  name: String;
};

type SelectProps = {
  items: DropdownItemObject[];
  selectedValue: string;
  setSelected: Function;
};

export const Select = ({ items, selectedValue, setSelected }: SelectProps) => {
  const [active, setActive] = useState(false);
  const triggerSelection = () => {
    setActive(!active);
  };
  return (
    <div className="relative h-auto md:w-64 text-foreground">
      <div
        className="border border-foreground relative flex bg-background p-2 h-full"
        onClick={triggerSelection}
      >
        {selectedValue} <ChevronDownIcon className="absolute right-4 top-3" />
      </div>
      <ul
        className={`absolute bg-background border border-foreground w-full p-2 ${
          active
            ? "opacity-100 z-10 min-h-8 max-h-24 overflow-y-scroll"
            : "opacity-0 -z-10"
        }`}
      >
        {items.map((item, index) => (
          <DropdownItem
            dropdownitemObject={item}
            index={index}
            setSelected={setSelected}
            setActive={setActive}
          />
        ))}
      </ul>
    </div>
  );
};

const DropdownItem = ({
  dropdownitemObject,
  setSelected,
  setActive,
  index,
}: DropdownItemProps) => {
  return (
    <li
      className={`bg-background text-foreground hover:bg-foreground hover:text-background`}
      onClick={() => {
        setSelected(dropdownitemObject.name);
        setActive(false);
      }}
    >
      {dropdownitemObject.name}
    </li>
  );
};
