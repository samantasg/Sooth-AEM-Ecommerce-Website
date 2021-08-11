import "./styles/main.css";
import Theme from "./Components/Theme/Theme";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import NotFound from "./Components/Pages/NotFound";
import ProductsDisplay from "./Components/Pages/ProductsDisplay/ProductsDisplay";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Theme>
        <Layout>
          <Switch>
			      <Route path="/" exact component={Homepage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/category/:slug" component={ProductsDisplay}></Route>
            <Route component={NotFound}/>
			    </Switch>
        </Layout>
      </Theme>
    </Router>  
  );
}

export default App;
