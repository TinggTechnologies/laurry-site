// App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio'; // Create this component
import Intro from './pages/intro';
import About from './pages/about';
import Language from './pages/language';
import Education from './pages/education';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/language" element={<Language />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
