import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import ErrorPage from './errorPage';

function App() {
  return (
    <><Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create" component={Create} />
              <Route path="/blogs/:id" component={BlogDetails} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
