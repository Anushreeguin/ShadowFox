import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import heroImage from '@/assets/csk.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Live Match Banner */}
          <div className="mb-6 flex justify-center md:justify-start">
            <Badge className="bg-gradient-csk text-primary-foreground px-4 py-2 text-sm font-semibold animate-stadium-pulse">
              🔴 LIVE: CSK vs MI - Match in Progress
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-white">Chennai</span>
            <br />
            <span className="text-primary">Super Kings</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Experience the passion, pride, and power of the Lions. Join millions of fans worldwide in celebrating cricket's most beloved team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
            <Button size="lg" className="bg-gradient-csk hover:shadow-csk transition-all duration-300">
              <Trophy className="mr-2 h-5 w-5" />
              View Team Stats
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Calendar className="mr-2 h-5 w-5" />
              Match Schedule
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto md:mx-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-white/80">IPL Titles</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary mb-1">185+</div>
              <div className="text-sm text-white/80">Matches Won</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary mb-1">60M+</div>
              <div className="text-sm text-white/80">Global Fans</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-ball-bounce">
        <div className="w-16 h-16 rounded-full bg-gradient-csk opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
