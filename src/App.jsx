import Navbar from "./components/Navbar";
import Router from "./Router";

const App = () => {
  return (
    <>
      <header className="px-32 py-8">
        <Navbar />
      </header>
      <main className="px-32 py-8">
        <Router />
      </main>
    </>
  );
};

export default App;
