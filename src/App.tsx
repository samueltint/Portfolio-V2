import { Toaster } from "sonner";
import HeaderCard from "./components/HeaderCard";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";
import { entries } from "./lib/Entries";
import Entry from "./components/Entry";
import Section from "./components/Section";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-screen-background min-h-screen h-fit flex flex-col font-display">
        <Toaster />
        <Navbar />
        <main className="w-full">
          <section id="home" className=" md:pt-24">
            <HeaderCard />
          </section>

          <Section id="experience" ariaLabel="Experience">
            <h2 className="text-3xl font-semibold">Experience</h2>
            {entries
              .filter((entry) => entry.type === "experience")
              .map((entry) => (
                <Entry key={entry.id ?? entry.title} {...entry}>
                  {entry.description}
                </Entry>
              ))}
          </Section>

          <Section id="projects" ariaLabel="Projects">
            <h2 className="text-3xl font-semibold">Projects</h2>
            {entries
              .filter((entry) => entry.type === "project")
              .map((entry) => (
                <Entry key={entry.id ?? entry.title} {...entry}>
                  {entry.description}
                </Entry>
              ))}
          </Section>

          <Section id="education" ariaLabel="Education">
            <h2 className="text-3xl font-semibold">Education</h2>
            {entries
              .filter((entry) => entry.type === "education")
              .map((entry) => (
                <Entry key={entry.id ?? entry.title} {...entry}>
                  {entry.description}
                </Entry>
              ))}
          </Section>
          <div className="h-36" />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
