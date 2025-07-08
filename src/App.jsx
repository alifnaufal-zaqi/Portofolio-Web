import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`md:px-32 px-16 py-8 sticky top-0 bg-white z-50 ${
          isScroll ? "shadow-md transition duration-200" : ""
        }`}
      >
        <Navbar />
      </header>
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
