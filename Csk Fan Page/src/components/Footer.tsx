import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    'Match Schedule', 'Player Profiles', 'Team Statistics', 
    'News & Updates', 'Fan Club', 'Merchandise Store'
  ];

  const supportLinks = [
    'Contact Us', 'Privacy Policy', 'Terms of Service', 
    'Fan Code of Conduct', 'Help Center', 'Feedback'
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-csk flex items-center justify-center">
                <span className="text-2xl">🦁</span>
              </div>
              <span className="text-2xl font-heading font-bold text-primary">CSK Fans</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              The official fan community celebrating Chennai Super Kings - the most successful 
              franchise in IPL history. Join millions of fans worldwide in supporting the Yellow Army.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="flex-1"
                />
                <Button className="bg-gradient-csk hover:shadow-csk">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get latest match updates, news, and exclusive content delivered to your inbox.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 44 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>fans@csk.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 CSK Fans Community. All rights reserved. Unofficial fan website.
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with 
            <Heart className="h-4 w-4 text-primary mx-1" /> 
            by CSK fans for CSK fans
          </div>
        </div>

        {/* Fan Motto */}
        <div className="text-center mt-8 p-4 bg-gradient-csk rounded-lg">
          <span className="text-primary-foreground font-semibold text-lg">
            🦁 Whistle Podu! Yellow Army Forever! 🦁
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;