import { Link } from 'react-router-dom';
import { Sprout, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Protect Your Plants with AI-Powered Disease Detection
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Upload a photo of your plant and get instant analysis of its health status. Our advanced AI helps you identify diseases early and keep your garden thriving.
        </p>
        <Link to="/detect">
          <Button size="lg" className="gap-2">
            Start Detection <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 text-primary">
              <Sprout className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Easy to Use</h3>
            <p className="text-muted-foreground text-center">
              Simply upload a photo of your plant and get instant results. No sign-up required.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 text-primary">
              <Leaf className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Accurate Analysis</h3>
            <p className="text-muted-foreground text-center">
              Our AI model is trained on thousands of plant images for reliable disease detection.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 text-primary">
              <ShieldCheck className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Early Prevention</h3>
            <p className="text-muted-foreground text-center">
              Detect diseases early to protect your plants and maintain a healthy garden.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}