// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/intro';
import Portfolio from './components/Portfolio'; // Create this component

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
