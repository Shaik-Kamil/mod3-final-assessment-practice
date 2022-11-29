import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Main from './Main';

// import './App.css';
// import browserRouter,routes, route
// create a route inside our JSX
// create home page component
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
