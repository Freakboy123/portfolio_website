import { useState, useEffect, createContext } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

export const Theme = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setDarkMode(event.matches);
      });
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          setDarkMode(event.matches);
        });
    };
  }, []);

  return (
    <Theme.Provider value={[darkMode, setDarkMode]}>
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </Theme.Provider>
  );
}

export default App;
