
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <Menu />
        </Route>

      </Router>
    </div>
  );
}

export default App;
