import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Sprout className="h-6 w-6" />
          <span className="font-bold">PlantCare AI</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/detect">
            <Button>Detect Disease</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}