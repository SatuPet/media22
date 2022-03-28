import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import {MediaProvider} from './contexts/MediaContext';
import Home from './views/home';
import Login from './views/login';
import Logout from './views/logout';
import Profile from './views/profile';
import Single from './views/single';

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </MediaProvider>
    </Router>
  );
};

export default App;
