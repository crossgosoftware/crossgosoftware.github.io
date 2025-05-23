import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                CG
              </div>
              <span className="text-xl font-bold font-inter">CrossGo</span>
            </div>
            <p className="text-neutral-400 mb-6">
              We help businesses optimize workflows, enhance user experience, and leverage the power of AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-inter mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-neutral-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-inter mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#custom-development" className="text-neutral-400 hover:text-white transition-colors">Full-Stack Web Development</Link></li>
              <li><Link href="/services#cross-platform" className="text-neutral-400 hover:text-white transition-colors">Cross-Platform Development</Link></li>
              <li><Link href="/services#ai-integration" className="text-neutral-400 hover:text-white transition-colors">AI & LLM Integration</Link></li>
              <li><Link href="/services#object-tracking" className="text-neutral-400 hover:text-white transition-colors">AR & Object Tracking</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-inter mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-neutral-400"></i>
                <span className="text-neutral-400">CT3 Ori Garden Building, lienchieu, da nang, Vietnam</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-neutral-400"></i>
                <span className="text-neutral-400">crossgosoftwaresolution@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-neutral-400"></i>
                <span className="text-neutral-400">(+84) 0899248136</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-neutral-500 mb-4 md:mb-0">
              &copy; {currentYear} CrossGo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
