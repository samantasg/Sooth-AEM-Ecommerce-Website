import "./styles/main.css";
import Homepage from "./Components/Homepage/Homepage";
import Products from "./Components/Products/Products";
import Button from "./Components/Button/Button";


function App() {
  return (
    <>
    <Homepage></Homepage>
    <Products></Products>
    <Button primary>Primary</Button>
    </>
  );
}

export default App;
