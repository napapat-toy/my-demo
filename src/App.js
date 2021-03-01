import './App.css';
import Navbar from './components/Nav/Navbar';
import Post from './components/Post/Post';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserInterface from './components/User/UserInterface';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route exact path="/">
          <Post />
        </Route>
        <Route exact path="/user">
          <UserInterface />
        </Route>
      </div>
    </Router>
  );
}

export default App;
