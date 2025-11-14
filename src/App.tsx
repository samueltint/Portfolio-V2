import { Toaster } from "sonner";
import HeaderCard from "./components/HeaderCard";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-screen-background min-h-screen h-fit flex flex-col font-display">
        <Toaster />
        <Navbar />
        <main className="w-full">
          <section id="home" className="min-h-screen pt-24">
            <HeaderCard />
          </section>

          <section
            id="experience"
            aria-label="Experience"
            className="min-h-screen flex items-center justify-center pt-24"
          >
            <h2 className="text-3xl font-semibold">Experience</h2>
            {/* blank content for now */}
          </section>

          <section
            id="projects"
            aria-label="Projects"
            className="min-h-screen flex items-center justify-center pt-24"
          >
            <h2 className="text-3xl font-semibold">Projects</h2>
            {/* blank content for now */}
          </section>

          <section
            id="education"
            aria-label="Education"
            className="min-h-screen flex items-center justify-center pt-24"
          >
            <h2 className="text-3xl font-semibold">Education</h2>
            {/* blank content for now */}
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
