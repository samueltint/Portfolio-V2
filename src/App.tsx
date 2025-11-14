import HeaderCard from "./components/HeaderCard";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-amber-50 min-h-screen flex flex-col font-display">
        <Navbar />
        <HeaderCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
