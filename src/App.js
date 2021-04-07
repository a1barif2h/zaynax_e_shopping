import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePages from "./pages/HomePages";
import AllProducts from "./pages/AllProducts";
import TabNavbar from "./components/TabNavbar";

function App() {
  return (
    <>
    <Router>
      <TabNavbar />
      <Switch>
        <Route exact path='/' component={HomePages} />
        <Route exact path='/all/products' component={AllProducts} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
