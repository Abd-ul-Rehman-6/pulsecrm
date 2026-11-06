import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoCards from './components/VideoCards';
import AboutSection from './components/AboutSection';
import PipelineShowcase from './components/PipelineShowcase';
import StickyFeatures from './components/StickyFeatures';
import GrowthSteps from './components/GrowthSteps';
import PlatformWorkflows from './components/PlatformWorkflows';
import IntegrationsOrbit from './components/IntegrationsOrbit';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import UserGuide from './pages/UserGuide';
import GettingStarted from "./pages/GettingStarted";
import Developers from "./pages/Developers";
import Why from "./pages/Why"; // Why page import kiya

const Home = () => {
  return (
    <>
      <Hero />
      <VideoCards />
      <PipelineShowcase />
      <AboutSection />
      <StickyFeatures />
      <GrowthSteps />
      <PlatformWorkflows />
      <IntegrationsOrbit />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

function App() {
  const location = useLocation();

  // Sirf documentation pages par Navbar/Footer hide honge
  const isDocPage = 
    location.pathname === '/user-guide' || 
    location.pathname === '/developers' ||
    location.pathname.startsWith('/docs');

  return (
    <div className={`min-h-screen ${isDocPage ? 'bg-[#0b0c0e]' : 'bg-white'}`}>
      {!isDocPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/why" element={<Why />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
      
      {!isDocPage && <Footer />}
    </div>
  );
}

export default App;