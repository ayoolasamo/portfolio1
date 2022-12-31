import "./App.css";
import {Header }from "./components/Header/header";
import {Home} from "./components/Home/home";
import {Projects} from "./components/Projects/projects";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/contact";
import {Footer} from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
