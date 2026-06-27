import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { History } from './pages/History';
import { Faculty } from './pages/Faculty';
import { Academics } from './pages/Academics';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { WelcomePopup } from './components/WelcomePopup';

export default function App() {
  return (
    <Router>
      <WelcomePopup />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
