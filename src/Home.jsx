import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function Home() {
  return (
    <>
    <div className="container-header-nav">
      <Header /> 
      <Navbar /> 
    </div>
      <Footer />
    </>
  );
}

export default Home;
