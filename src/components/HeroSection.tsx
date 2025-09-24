import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Brain, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-crops.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--nature-primary)/0.9)] via-[hsl(var(--growth-green)/0.8)] to-[hsl(var(--nature-primary)/0.9)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Instantly Diagnose 
            <span className="block text-[hsl(var(--fresh-green))]">Crop Diseases</span>
            <span className="block">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Upload a leaf image and get accurate disease detection in seconds. 
            Powered by advanced AI technology for precision agriculture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Try Now - It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Watch Demo
            </Button>
          </div>
          
          {/* Key Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Leaf className="h-6 w-6 text-[hsl(var(--fresh-green))]" />
              </div>
              <span className="font-medium">Instant Analysis</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Brain className="h-6 w-6 text-[hsl(var(--fresh-green))]" />
              </div>
              <span className="font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-[hsl(var(--fresh-green))]" />
              </div>
              <span className="font-medium">Geo-tagged Reports</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;