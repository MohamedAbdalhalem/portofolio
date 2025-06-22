import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Nav } from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </>
  )
}
