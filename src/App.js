// App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio'; // Create this component
import Intro from './pages/intro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
