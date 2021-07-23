import "./styles/main.css";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import Products from "./Components/Products/Products";
import {Button , BrownButton, BlueButton} from "./Components/Button/Button";
import ShopMore from "./Components/ShopMore/ShopMore";
import Ingredients from "./Components/Ingredients/Ingredients";
import {Heading2} from "./Components/Heading/Heading";

function App() {
  return (
    <Layout>
    <Homepage></Homepage>
    <Products></Products>
    <ShopMore></ShopMore>
    <Ingredients></Ingredients>
    <Button>Shop products</Button>
    <BrownButton>Subscribe</BrownButton>
    <BlueButton>Continue to Review Order</BlueButton>
    <Heading2>Heading 2</Heading2>
    </Layout>
  );
}

export default App;
