import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';

function App() {
  return (
    <><Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create" component={Create} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
