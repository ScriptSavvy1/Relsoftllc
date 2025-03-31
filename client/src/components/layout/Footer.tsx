import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#F4F7FC] dark:bg-[#1E293B] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse delay-1000"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <i className="fas fa-code text-2xl text-[#39509A] mr-2"></i>
              <span className="text-xl font-bold text-[#39509A]">Relsoft</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Building innovative software solutions that transform businesses
              and drive growth in the digital age.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin", "github"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#39509A]/10 flex items-center justify-center text-[#39509A] hover:bg-[#39509A] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab fa-${social}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-[#39509A]">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-[#39509A] transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-[#39509A]"></i>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-[#39509A]">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "AI Solutions",
                "Web Development",
                "Mobile Apps",
                "Cloud Services",
              ].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/services#${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-[#39509A] transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-[#39509A]"></i>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-[#39509A]">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: "fas fa-map-marker-alt",
                  text: "123 Tech Street, Digital City, 12345",
                },
                {
                  icon: "fas fa-phone",
                  text: "+1 (555) 123-4567",
                },
                {
                  icon: "fas fa-envelope",
                  text: "contact@relsoft.com",
                },
                {
                  icon: "fas fa-clock",
                  text: "Mon - Fri: 9:00 AM - 6:00 PM",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-slate-600 dark:text-slate-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`${item.icon} text-[#39509A] mt-1`}></i>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/50"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-[#39509A] mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Stay updated with our latest news, insights, and industry trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-[#1E293B]/50 focus:outline-none focus:ring-2 focus:ring-[#39509A] focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-[#39509A] text-white font-medium hover:bg-[#39509A]/90 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Relsoft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-slate-600 dark:text-slate-400 hover:text-[#39509A] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-600 dark:text-slate-400 hover:text-[#39509A] text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
