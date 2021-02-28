
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './App.css';

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
