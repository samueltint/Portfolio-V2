import { AtSign, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Github, Linkedin } from "./ui/icons";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function Navbar() {
  const copyEmail = () => {
    navigator.clipboard.writeText("samueltint2@gmail.com");
    toast("Email copied to clipboard");
  };

  return (
    <nav className="sticky top-0 p-4 pr-8 w-screen flex items-center z-50">
      <div className="flex space-x-4 items-center">
        <Button
          asChild
          variant={"shadow"}
          size={"icon-lg"}
          className="rounded-full"
        >
          <a href="#home" aria-label="Go to home">
            <Home className="size-5" />
          </a>
        </Button>

        <Button asChild variant={"shadow"} size={"lg"} className="rounded-full">
          <a href="#experience">Experience</a>
        </Button>

        <Button asChild variant={"shadow"} size={"lg"} className="rounded-full">
          <a href="#projects">Projects</a>
        </Button>

        <Button asChild variant={"shadow"} size={"lg"} className="rounded-full">
          <a href="#education">Education</a>
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex space-x-4 items-center">
        <Button variant={"shadow"} size={"icon-lg"} className="rounded-full">
          <Link
            to={"https://github.com/samueltint"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-5" />
          </Link>
        </Button>
        <Button
          asChild
          variant={"shadow"}
          size={"icon-lg"}
          className="rounded-full"
        >
          <Link
            to={"https://www.linkedin.com/in/samuel-tint/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-5" />
          </Link>
        </Button>
        <Button
          variant={"shadow"}
          size={"icon-lg"}
          className="rounded-full"
          onClick={() => {
            copyEmail();
          }}
        >
          <AtSign className="size-5" />
        </Button>
        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}

// function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="shadow" className="rounded-full" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

export default Navbar;
