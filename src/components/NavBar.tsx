import { Home } from "lucide-react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

function Navbar() {
  return (
    <nav className="sticky top-0 p-4 z-10 flex items-center">
      <NavButtonGroup />
      <div className="flex-1" />
      <ModeToggle />
    </nav>
  );
}

function NavButtonGroup() {
  return (
    <div className="flex space-x-4 items-center">
      <Button variant={"shadow"} size={"icon-lg"} className="rounded-full">
        <Home />
      </Button>
      <Button variant={"shadow"} size={"lg"} className="rounded-full">
        Experience
      </Button>
      <Button variant={"shadow"} size={"lg"} className="rounded-full">
        Projects
      </Button>
      <Button variant={"shadow"} size={"lg"} className="rounded-full">
        Education
      </Button>
    </div>
  );
}

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="shadow" className="rounded-full" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Navbar;
