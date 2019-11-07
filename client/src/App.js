import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './otherPage';
import Fib from './fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <p>
            Welcome semua...
          </p>
          <Link to="/"> Home</Link><br />
          <Link to="otherpage">Other Page</Link><br />
        </header>
        <div>
          <Router>
              <div>
                <Route exact path="/" component={Fib} />
                <Route path="/otherpage" component={OtherPage} />
              </div>
          </Router>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
