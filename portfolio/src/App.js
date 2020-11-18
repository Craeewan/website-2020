import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Skills from './Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/skills">
            <Header/>
            <Skills/>
          </Route>
          <Route path="/">
            <Header/>
          </Route>
          {/* {Footer} */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
