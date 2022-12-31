import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
