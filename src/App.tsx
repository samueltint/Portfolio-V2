import HeaderCard from "./components/HeaderCard";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-screen-background min-h-screen h-fit flex flex-col font-display">
        <Navbar />
        <HeaderCard />
        <div className="h-[2000px]" />
      </div>
    </ThemeProvider>
  );
}

export default App;
