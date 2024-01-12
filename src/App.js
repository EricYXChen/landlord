import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Landing from './components/Landing';
import Board from './components/Board';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path ="/" element = {<Landing />}/>
        <Route path = "/board" element = {<Board />} />
      </Routes>

    </Router>
    </>
  );
}

export default App;
