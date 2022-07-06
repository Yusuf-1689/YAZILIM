import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
      <Instructors />
      <ContactForm />
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
