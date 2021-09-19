import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Details from './Details';
import Homescreen from "./Homescreen.js";
import Login from './Login';
import Movies from './Movies';
import Search from './Search';
import Series from './Series';
import SignIn from './SignIn';
import TvDetails from './TvDetails';
import PlayList from './PlayList';
import Season from './Season';
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route path="/" exact>
                <Homescreen/>
            </Route>
            <Route path="/details/:id" component={Details}/>
            <Route path="/search/:query" component={Search}/>
            <Route path="/seriesDetails/:id" component={TvDetails}/>
            <Route path="/movies">
                <Movies/>
            </Route>
            <Route path="/series">
                <Series/>
            </Route>
            <Route path="/authenticate">
                <SignIn/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/playlist">
                <PlayList/>
            </Route>
            <Route path="/tv/:id/season/:seasonnumber" component={Season}/>
           
        </Switch>
     </Router>
    </div>
  );
}

export default App;
