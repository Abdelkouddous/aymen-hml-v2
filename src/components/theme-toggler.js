// "use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import { Button } from "./ui/button";
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Dropdown
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <DropdownItem>
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      </DropdownItem>
      <DropdownItem>
        <Moon className="hidden h-5 w-5 dark:block" />
      </DropdownItem>

      <DropdownItem>
        <span className="sr-only">Toggle theme</span>
      </DropdownItem>
    </Dropdown>
  );
}
