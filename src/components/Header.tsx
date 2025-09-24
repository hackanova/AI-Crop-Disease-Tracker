import { Button } from "@/components/ui/button";
import agrilensLogo from "@/assets/logo-agrilens-final.png";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={agrilensLogo} alt="AgriLens Logo" className="h-12 w-12 md:h-14 md:w-14" />
          <div>
            <span className="text-2xl text-[hsl(var(--nature-primary))] block leading-tight font-bold text-left md:text-4xl">AgriLens</span>
            <span className="text-sm text-[hsl(var(--growth-green))] font-medium">Your Crop's Health, Our Priority</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <Button variant="nature" size="sm">
          Try Now
        </Button>
      </div>
    </header>;
};
export default Header;