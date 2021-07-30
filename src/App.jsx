import "./styles/main.css";
import Layout from "./Components/Layout/Layout";
import Banner1 from "./Components/Banner1/Banner1";
import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Banner1></Banner1>
      <Navigation></Navigation>
        <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}

export default App;
