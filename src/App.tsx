import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from './components/Discover/Discover';

import './index.css';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/discover" element={<Discover />} />
  
      </Routes>
    </Router>
  );
};

export default App;