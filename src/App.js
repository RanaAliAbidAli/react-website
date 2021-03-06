
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
        </Switch>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
