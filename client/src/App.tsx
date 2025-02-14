import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Detect from '@/pages/Detect';

function App() {
  return (
    <Router>
      <div className="min-h-screen md:w-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;