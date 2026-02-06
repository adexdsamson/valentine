import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstallPrompt from './components/InstallPrompt';
import LandingPage from './pages/LandingPage';
import SwipeGallery from './pages/SwipeGallery';
import LoveLetter from './pages/LoveLetter';

function App() {
  return (
    <Router>
      <InstallPrompt />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<SwipeGallery />} />
        <Route path="/letter" element={<LoveLetter />} />
      </Routes>
    </Router>
  );
}

export default App;
