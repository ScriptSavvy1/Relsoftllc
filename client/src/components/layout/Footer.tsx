import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI Solutions", href: "/services#ai" },
    { name: "Web Development", href: "/services#web" },
    { name: "CMS Design", href: "/services#cms" },
    { name: "Coding Training", href: "/services#training" },
    { name: "Mobile Development", href: "/services#mobile" },
    { name: "Cloud Solutions", href: "/services#cloud" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Data Protection", href: "/data-protection" },
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
    { icon: "fab fa-twitter", href: "https://twitter.com" },
    { icon: "fab fa-github", href: "https://github.com" },
    { icon: "fab fa-facebook-f", href: "https://facebook.com" },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-white">Relsoft</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Leading technology solutions provider specializing in AI, web development, and cloud services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={`Visit our ${link.icon.split('-')[2]} page`}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-slate-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Relsoft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookie-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
