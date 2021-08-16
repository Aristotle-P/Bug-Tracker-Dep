import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import login from './pages/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </header>
      <Switch>
        <Route exact path="/login" component={login} />
      </Switch>
    </div>
  );
}

export default App;
