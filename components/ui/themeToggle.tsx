"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const ThemeIcon = ({ theme }: { theme: string | undefined }) => {
    if (theme === "light") return <SunIcon />;
    else {
      return <MoonIcon />;
    }
  };

  const updateTheme = () => {
    if (theme === "light") setTheme("dark");
    else {
      setTheme("light");
    }
  };

  return (
    <div className="absolute bottom-20 right-4">
      <Button onClick={updateTheme}>
        <ThemeIcon theme={theme} />
      </Button>
    </div>
  );
}
