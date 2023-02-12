import Banner from "./Compontnts/Bannner/Banner";
import Footer from "./Compontnts/Footer/Footer";
import Fourthsec from "./Compontnts/Fourthsec/Fourthsec";
import Navbar from "./Compontnts/Navbar";
import Secondsec from "./Compontnts/Secondsec/Secondsec";
import Thirdsec from "./Compontnts/Thirdsec/Thirdsec";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Secondsec/>
      <Thirdsec/>
      <Fourthsec/>
      <Footer/>
    </div>
  );
}

export default App;
