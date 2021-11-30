import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Navigation from './component/nev/Navigation';
import Venues from './pages/Categories/Venues';

const  App  = () => {
    return (
    <>
        <Router>
              <Navigation />
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/venues" component={Venues}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </Router>
    </>
    )
}

export default App;