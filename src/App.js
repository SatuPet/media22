import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';
import Single from './views/single';

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
