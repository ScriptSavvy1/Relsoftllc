import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'} border-b border-slate-200 dark:border-slate-800`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold dark:text-white">Relsoft</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`${location === link.href ? 'text-primary-600 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300'} hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu} 
              className="p-2 ml-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location === link.href ? 'text-primary-600 dark:text-primary-400 bg-slate-50 dark:bg-slate-800/60' : 'text-slate-700 dark:text-slate-300'} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
