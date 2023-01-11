import "./App.css";
import Content from "./components/Content";
import FooterBanner from "./components/FooterBanner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
