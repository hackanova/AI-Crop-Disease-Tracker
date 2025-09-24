import { Separator } from "@/components/ui/separator";
import agrilensLogo from "@/assets/logo-agrilens-final.png";
import hacknovaLogo from "@/assets/logo-hacknova.png";
const Footer = () => {
  return <footer className="bg-[hsl(var(--nature-primary))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={agrilensLogo} alt="AgriLens Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold">AgriLens</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Revolutionizing agriculture with AI-powered crop disease detection. 
              Helping farmers protect their harvests and maximize yields through cutting-edge technology.
            </p>
            
            {/* Team Credit */}
            <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <img src={hacknovaLogo} alt="Team HackNova Logo" className="h-8 w-8" />
              <div>
                <p className="text-sm font-medium">Developed by</p>
                <p className="text-[hsl(var(--fresh-green))] font-semibold text-lg">Team HackNova</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-white/80 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/support" className="text-white/80 hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 AgriLens by Team HackNova. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Empowering sustainable agriculture through AI innovation
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;