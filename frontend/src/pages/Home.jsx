import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Hero />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
