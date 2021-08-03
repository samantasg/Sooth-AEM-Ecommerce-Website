import "./styles/main.css";
import Layout from "./Components/Layout/Layout";
import Banner1 from "./Components/Banner1/Banner1";
import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Theme from "./Components/Theme/Theme";


function App() {
  return (
      <Theme>
        <Banner1/>
        <Navigation/>
        <Homepage/>
        <Footer/>
      </Theme>
  );
}

export default App;
