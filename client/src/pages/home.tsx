import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  pageTransition,
  staggerContainer,
  childVariant,
  heroPatternCSS,
} from "@/lib/utils";

const partners = [
  { name: "Microsoft", icon: "fab fa-microsoft" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Google", icon: "fab fa-google" },
  { name: "Salesforce", icon: "fab fa-salesforce" },
];

const services = [
  {
    icon: "fas fa-robot",
    color: "[#39509A]",
    title: "AI Solutions",
    description:
      "Custom artificial intelligence solutions including machine learning models, predictive analytics, and natural language processing.",
    link: "/services#ai",
    tags: ["AI", "Machine Learning", "Analytics"],
    features: ["Custom ML Models", "Predictive Analytics", "NLP Solutions"],
  },
  {
    icon: "fas fa-code",
    color: "[#39509A]",
    title: "Web Development",
    description:
      "Modern web applications built with React, TypeScript, and other cutting-edge technologies to deliver exceptional user experiences.",
    link: "/services#web",
    tags: ["Web", "Frontend", "Backend"],
    features: ["React", "TypeScript", "Node.js"],
  },
  {
    icon: "fas fa-columns",
    color: "[#39509A]",
    title: "CMS Design",
    description:
      "Custom content management systems that make content creation and management simple, secure, and efficient.",
    link: "/services#cms",
    tags: ["CMS", "Content", "Management"],
    features: ["Custom CMS", "Headless CMS", "Content Strategy"],
  },
  {
    icon: "fas fa-laptop-code",
    color: "[#39509A]",
    title: "Coding Training",
    description:
      "Comprehensive training programs to help your team master the latest programming languages and development practices.",
    link: "/services#training",
    tags: ["Training", "Education", "Development"],
    features: ["Custom Training", "Workshops", "Mentoring"],
  },
  {
    icon: "fas fa-mobile-alt",
    color: "[#39509A]",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional experiences across iOS and Android devices.",
    link: "/services#mobile",
    tags: ["Mobile", "iOS", "Android"],
    features: ["Native Apps", "Cross-platform", "UI/UX"],
  },
  {
    icon: "fas fa-server",
    color: "[#39509A]",
    title: "Cloud Solutions",
    description:
      "Expert cloud architecture, migration, and management services for AWS, Azure, and Google Cloud platforms.",
    link: "/services#cloud",
    tags: ["Cloud", "DevOps", "Infrastructure"],
    features: ["AWS", "Azure", "GCP"],
  },
];

const HomePage = () => {
  // Add the hero pattern CSS to the head
  React.useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = heroPatternCSS;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-24 pb-16 md:py-28 bg-[#F4F7FC] dark:bg-[#1E293B] overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#39509A]/5 animate-pulse"></div>
          <div className="absolute top-1/2 -left-12 w-40 h-40 rounded-full bg-[#39509A]/5 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 right-1/4 w-56 h-56 rounded-full bg-[#39509A]/5 animate-pulse delay-2000"></div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #39509A10 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="md:w-1/2 md:pr-8 mb-10 md:mb-0"
              variants={childVariant}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#39509A] mr-2 animate-pulse"></span>
                Welcome to Relsoft
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                variants={childVariant}
              >
                Building{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-[#39509A] to-[#39509A]/80 bg-clip-text text-transparent">
                    Digital Solutions
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-2 bg-[#39509A]/20 rounded-full -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </span>{" "}
                For The Future
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl"
                variants={childVariant}
              >
                We create innovative software solutions that transform
                businesses. From AI and web development to CMS design and
                technical training.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={childVariant}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#39509A] hover:bg-[#39509A]/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex justify-center items-center px-6 py-3 border-2 border-[#39509A] text-base font-medium rounded-xl text-[#39509A] hover:bg-[#39509A]/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="md:w-1/2 relative" variants={childVariant}>
              <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-[#39509A]/20 to-[#39509A]/10 dark:from-[#39509A]/10 dark:to-[#39509A]/5 rounded-2xl overflow-hidden p-5 backdrop-blur-sm border border-[#39509A]/10 dark:border-[#39509A]/20 shadow-xl">
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, #39509A10 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, #39509A10 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, #39509A10 0%, transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Floating elements */}
                  <motion.div
                    className="animate-float"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-[#39509A]/20 backdrop-blur-md border border-[#39509A]/30 shadow-lg"></div>
                    <div className="absolute top-14 right-10 w-12 h-12 rounded-xl bg-[#39509A]/20 backdrop-blur-md border border-[#39509A]/30 shadow-lg"></div>
                    <div className="absolute bottom-16 left-16 w-20 h-20 rounded-xl bg-[#39509A]/20 backdrop-blur-md border border-[#39509A]/30 shadow-lg"></div>
                    <div className="absolute bottom-10 right-12 w-24 h-16 rounded-xl bg-[#39509A]/20 backdrop-blur-md border border-[#39509A]/30 shadow-lg"></div>
                  </motion.div>

                  {/* Code visualization */}
                  <div className="relative z-10 mt-4">
                    <motion.div
                      className="inline-block text-4xl mb-4"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <i className="fas fa-code text-[#39509A]"></i>
                    </motion.div>

                    {/* Code editor style container */}
                    <div className="bg-[#1E293B]/50 rounded-xl p-4 backdrop-blur-sm border border-[#39509A]/20">
                      {/* Code header */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>

                      {/* Code content */}
                      <div className="font-mono text-sm space-y-2">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-center"
                        >
                          <span className="text-[#39509A]">const</span>
                          <span className="text-green-500 ml-2">future</span>
                          <span className="text-[#39509A]/80 ml-2">=</span>
                          <span className="text-[#39509A]/80 ml-2">await</span>
                          <span className="text-yellow-500 ml-2">relsoft</span>
                          <span className="text-[#39509A]/80">.</span>
                          <span className="text-blue-400">build</span>
                          <span className="text-[#39509A]/80">(</span>
                          <span className="text-purple-400">yourIdea</span>
                          <span className="text-[#39509A]/80">);</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                          className="flex items-center"
                        >
                          <span className="text-[#39509A]">const</span>
                          <span className="text-green-500 ml-2">result</span>
                          <span className="text-[#39509A]/80 ml-2">=</span>
                          <span className="text-yellow-500 ml-2">future</span>
                          <span className="text-[#39509A]/80">.</span>
                          <span className="text-blue-400">transform</span>
                          <span className="text-[#39509A]/80">(</span>
                          <span className="text-purple-400">innovation</span>
                          <span className="text-[#39509A]/80">);</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                          className="flex items-center"
                        >
                          <span className="text-[#39509A]">console</span>
                          <span className="text-[#39509A]/80">.</span>
                          <span className="text-blue-400">log</span>
                          <span className="text-[#39509A]/80">(</span>
                          <span className="text-green-500">result</span>
                          <span className="text-[#39509A]/80">);</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Tagline */}
                    <motion.div
                      className="mt-4 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="font-tech text-xl font-medium dark:text-white">
                        One Stop Solution For everything
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#39509A] to-[#39509A]/80 rounded-2xl -z-10 opacity-50 blur-2xl"></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.6, staggerChildren: 0.1 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                variants={childVariant}
              >
                <div className="h-7 text-[#39509A]/60 dark:text-[#39509A]/40 flex items-center">
                  <i className={`${partner.icon} text-xl mr-2`}></i>
                  <span className="font-medium text-sm">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-white dark:bg-[#1E293B] relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#39509A]/5 animate-pulse delay-2000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-6"
            >
              <i className="fas fa-cogs mr-2"></i>
              Our Services
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#39509A] to-[#39509A]/80 bg-clip-text text-transparent"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Comprehensive solutions to help your business thrive in the
              digital age. From cutting-edge AI to robust web development, we've
              got you covered.
            </motion.p>
          </motion.div>

          {/* Service Categories Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="px-4 py-2 rounded-full bg-[#39509A] text-white text-sm font-medium hover:bg-[#39509A]/90 transition-colors duration-300">
              All Services
            </button>
            <button className="px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium hover:bg-[#39509A]/20 transition-colors duration-300">
              AI & ML
            </button>
            <button className="px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium hover:bg-[#39509A]/20 transition-colors duration-300">
              Web Development
            </button>
            <button className="px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium hover:bg-[#39509A]/20 transition-colors duration-300">
              Mobile Apps
            </button>
            <button className="px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium hover:bg-[#39509A]/20 transition-colors duration-300">
              Cloud & DevOps
            </button>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-[#1E293B]/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 hover:border-[#39509A]/20 dark:hover:border-[#39509A]/20"
                variants={childVariant}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#39509A]/5 to-transparent rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

                {/* Service icon with animation */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#39509A]/10 flex items-center justify-center">
                    <i
                      className={`${service.icon} text-[#39509A] text-2xl`}
                    ></i>
                  </div>
                </motion.div>

                {/* Service content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#39509A] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-[#39509A]/5 text-[#39509A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                        >
                          <i className="fas fa-check-circle text-[#39509A] mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn more link with animation */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-[#39509A] hover:text-[#39509A]/80 font-medium group"
                    >
                      Learn more
                      <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                    </Link>
                  </motion.div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#39509A]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#39509A]/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-[#39509A] hover:bg-[#39509A]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-comments mr-2"></i>
              Talk to an expert
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F4F7FC] dark:bg-[#1E293B] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse delay-1000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-6"
            >
              <i className="fas fa-star mr-2"></i>
              Why Choose Us
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#39509A] to-[#39509A]/80 bg-clip-text text-transparent"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
          >
            {[
              {
                number: "100+",
                label: "Projects Completed",
                icon: "fas fa-check-circle",
              },
              { number: "50+", label: "Happy Clients", icon: "fas fa-users" },
              { number: "24/7", label: "Support", icon: "fas fa-headset" },
              {
                number: "5+",
                label: "Years Experience",
                icon: "fas fa-calendar-alt",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={childVariant}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#39509A]/10 flex items-center justify-center">
                  <i className={`${stat.icon} text-[#39509A] text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-[#39509A] mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Plans Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">Pricing Plans</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </div>

            {/* Pricing Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
            >
              {[
                {
                  name: "Starter",
                  price: "49",
                  description: "Perfect for small businesses and startups",
                  features: [
                    "Basic AI Integration",
                    "5 Projects",
                    "Email Support",
                    "Basic Analytics",
                    "Community Access",
                  ],
                  color: "from-blue-500 to-blue-600",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "99",
                  description: "Ideal for growing businesses",
                  features: [
                    "Advanced AI Solutions",
                    "Unlimited Projects",
                    "Priority Support",
                    "Advanced Analytics",
                    "API Access",
                    "Custom Integrations",
                    "Team Collaboration",
                  ],
                  color: "from-[#39509A] to-[#39509A]/80",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "199",
                  description: "For large organizations with complex needs",
                  features: [
                    "Custom AI Solutions",
                    "Unlimited Projects",
                    "24/7 Support",
                    "Advanced Analytics",
                    "API Access",
                    "Custom Integrations",
                    "Team Collaboration",
                    "Dedicated Account Manager",
                    "SLA Guarantee",
                  ],
                  color: "from-purple-500 to-purple-600",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white dark:bg-[#1E293B]/50 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? "border-[#39509A] dark:border-[#39509A]" : ""
                  }`}
                  variants={childVariant}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#39509A] text-white text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-[#39509A]">
                        ${plan.price}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 ml-2">
                        /month
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <i className="fas fa-check-circle text-[#39509A] mr-3"></i>
                        <span className="text-slate-600 dark:text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`block w-full py-3 px-6 rounded-xl text-center font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#39509A] text-white hover:bg-[#39509A]/90"
                        : "bg-[#39509A]/10 text-[#39509A] hover:bg-[#39509A]/20"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#39509A]/10 text-[#39509A]">
                <i className="fas fa-info-circle mr-2"></i>
                <span>
                  All plans include a 14-day free trial. No credit card
                  required.
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional results through
                careful planning and execution
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Timeline line with gradient */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#39509A] via-[#39509A]/50 to-[#39509A]"></div>

              {/* Timeline items */}
              {[
                {
                  title: "Discovery",
                  description:
                    "We analyze your requirements and goals to create a tailored solution.",
                  icon: "fas fa-search",
                  details: [
                    "Requirements gathering",
                    "Goal analysis",
                    "Solution planning",
                  ],
                  color: "from-blue-500 to-blue-600",
                  duration: "1-2 Weeks",
                  deliverables: [
                    "Project Scope",
                    "Requirements Doc",
                    "Initial Proposal",
                  ],
                },
                {
                  title: "Planning",
                  description:
                    "Detailed project planning and resource allocation for optimal execution.",
                  icon: "fas fa-tasks",
                  details: [
                    "Resource allocation",
                    "Timeline creation",
                    "Risk assessment",
                  ],
                  color: "from-purple-500 to-purple-600",
                  duration: "2-3 Weeks",
                  deliverables: [
                    "Project Plan",
                    "Resource Schedule",
                    "Risk Matrix",
                  ],
                },
                {
                  title: "Development",
                  description:
                    "Agile development process with regular updates and feedback.",
                  icon: "fas fa-code",
                  details: [
                    "Sprint planning",
                    "Regular updates",
                    "Quality assurance",
                  ],
                  color: "from-green-500 to-green-600",
                  duration: "4-6 Weeks",
                  deliverables: [
                    "Working Prototype",
                    "Feature Implementation",
                    "Code Review",
                  ],
                },
                {
                  title: "Delivery",
                  description:
                    "Thorough testing and smooth deployment of your solution.",
                  icon: "fas fa-rocket",
                  details: [
                    "Testing & QA",
                    "Deployment",
                    "Post-launch support",
                  ],
                  color: "from-orange-500 to-orange-600",
                  duration: "1-2 Weeks",
                  deliverables: ["Final Product", "Documentation", "Training"],
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-16 last:mb-0 ${
                    index % 2 === 0 ? "md:pr-1/2 md:pl-8" : "md:pl-1/2 md:pr-8"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Step number with animation */}
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#1E293B] border-2 border-[#39509A] flex items-center justify-center z-10 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg font-bold text-[#39509A]">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Step card with enhanced design */}
                  <div className="relative bg-white dark:bg-[#1E293B]/50 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl transition-all duration-300 group">
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>

                    {/* Header with enhanced styling */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mr-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className={`${step.icon} text-white text-2xl`}></i>
                      </motion.div>
                      <div>
                        <h4 className="text-2xl font-semibold group-hover:text-[#39509A] transition-colors duration-300">
                          {step.title}
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description with improved typography */}
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details list with enhanced styling */}
                    <div className="space-y-3 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-center text-base text-slate-600 dark:text-slate-400 group/item"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <i className="fas fa-check-circle text-[#39509A] mr-3 group-hover/item:scale-110 transition-transform duration-200"></i>
                          {detail}
                        </motion.div>
                      ))}
                    </div>

                    {/* Deliverables section */}
                    <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                      <h5 className="text-sm font-semibold text-[#39509A] mb-3">
                        Key Deliverables
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map(
                          (deliverable, deliverableIndex) => (
                            <span
                              key={deliverableIndex}
                              className="px-3 py-1 text-sm rounded-full bg-[#39509A]/10 text-[#39509A]"
                            >
                              {deliverable}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Progress indicator with enhanced design */}
                    <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Progress
                        </span>
                        <span className="text-[#39509A] font-medium">
                          {Math.round((index + 1) * 25)}%
                        </span>
                      </div>
                      <div className="mt-3 h-3 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 25}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Summary with enhanced design */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-[#39509A]/10 text-[#39509A] shadow-lg">
                <i className="fas fa-clock mr-3 text-xl"></i>
                <span className="font-medium text-lg">
                  Average Project Timeline: 8-12 Weeks
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "CTO at TechCorp",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
                quote:
                  "Relsoft transformed our business with their innovative AI solutions. Their expertise and dedication are unmatched.",
              },
              {
                name: "Michael Chen",
                role: "Product Manager at InnovateCo",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
                quote:
                  "The team's technical expertise and attention to detail made our project a huge success. Highly recommended!",
              },
              {
                name: "Emily Rodriguez",
                role: "CEO at StartupX",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
                quote:
                  "Relsoft's training programs helped our team upskill quickly. Their support and guidance were invaluable.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#1E293B]/50 rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-800/50"
                variants={childVariant}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 flex text-[#39509A]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-[#1E293B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39509A] to-[#39509A]/80 mix-blend-multiply"></div>
            </div>
            <div className="relative py-16 px-8 sm:py-24 sm:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's discuss how our solutions can help you achieve your
                  goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-[#39509A] bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
