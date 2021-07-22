import "./styles/main.css";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import Products from "./Components/Products/Products";
import {Button , BrownButton, BlueButton} from "./Components/Button/Button";
import ShopMore from "./Components/ShopMore/ShopMore";


function App() {
  return (
    <Layout>
    <Homepage></Homepage>
    <Products></Products>
    <ShopMore></ShopMore>
    <Button>Shop products</Button>
    <BrownButton>Subscribe</BrownButton>
    <BlueButton>Continue to Review Order</BlueButton>
    </Layout>
  );
}

export default App;
