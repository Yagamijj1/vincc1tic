import "./App.css";
import Contact  from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Sobre from "./Components/Sobre";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Contact />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;