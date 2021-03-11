import './App.css';
import Navbar from './components/Nav/Navbar';
import Post from './components/Post/Post';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserInterface from './components/User/UserInterface';
import FetchingApi from './components/FetchingAPI/FetchingAPI';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="route-page">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/user">
            <UserInterface />
          </Route>
          <Route exact path="/post">
            <Post />
          </Route>
          <Route exact path="/fetchingapi">
            <FetchingApi />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
