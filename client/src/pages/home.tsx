import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { pageTransition, staggerContainer, childVariant, heroPatternCSS } from "@/lib/utils";

const partners = [
  { name: "Microsoft", icon: "fab fa-microsoft" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Google", icon: "fab fa-google" },
  { name: "Salesforce", icon: "fab fa-salesforce" },
];

const services = [
  {
    icon: "fas fa-robot",
    color: "blue",
    title: "AI Solutions",
    description: "Custom artificial intelligence solutions including machine learning models, predictive analytics, and natural language processing.",
    link: "/services#ai"
  },
  {
    icon: "fas fa-code",
    color: "indigo",
    title: "Web Development",
    description: "Modern web applications built with React, TypeScript, and other cutting-edge technologies to deliver exceptional user experiences.",
    link: "/services#web"
  },
  {
    icon: "fas fa-columns",
    color: "violet",
    title: "CMS Design",
    description: "Custom content management systems that make content creation and management simple, secure, and efficient.",
    link: "/services#cms"
  },
  {
    icon: "fas fa-laptop-code",
    color: "blue",
    title: "Coding Training",
    description: "Comprehensive training programs to help your team master the latest programming languages and development practices.",
    link: "/services#training"
  },
  {
    icon: "fas fa-mobile-alt", 
    color: "indigo",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional experiences across iOS and Android devices.",
    link: "/services#mobile"
  },
  {
    icon: "fas fa-server",
    color: "violet",
    title: "Cloud Solutions",
    description: "Expert cloud architecture, migration, and management services for AWS, Azure, and Google Cloud platforms.",
    link: "/services#cloud"
  }
];

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "AI",
    categoryColor: "blue",
    date: "June 12, 2023",
    title: "The Future of AI in Business: 2023 Trends",
    description: "Explore how artificial intelligence is reshaping industries and creating new opportunities for innovation.",
    link: "/blog/ai-trends-2023"
  },
  {
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "Development",
    categoryColor: "indigo",
    date: "May 28, 2023",
    title: "Optimizing React Applications for Performance",
    description: "Learn advanced techniques to improve the speed and responsiveness of your React web applications.",
    link: "/blog/react-optimization"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "Cloud",
    categoryColor: "violet",
    date: "May 15, 2023",
    title: "5 Steps to a Successful Cloud Migration",
    description: "A comprehensive guide to moving your infrastructure to the cloud while minimizing risks and downtime.",
    link: "/blog/cloud-migration"
  }
];

const HomePage = () => {
  // Add the hero pattern CSS to the head
  React.useEffect(() => {
    const styleElement = document.createElement('style');
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
      <section id="home" className="pt-24 pb-16 md:py-32 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="md:w-1/2 md:pr-8 mb-10 md:mb-0" variants={childVariant}>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                variants={childVariant}
              >
                Building <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Digital Solutions</span> For The Future
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8"
                variants={childVariant}
              >
                We create innovative software solutions that transform businesses. From AI and web development to CMS design and technical training.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={childVariant}
              >
                <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <Link href="/services" className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className="md:w-1/2 relative" variants={childVariant}>
              <motion.div 
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-full h-72 sm:h-96 bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-blue-500/10 dark:to-violet-500/10 rounded-2xl overflow-hidden p-6 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl">
                  <motion.div 
                    className="animate-float"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30"></div>
                    <div className="absolute top-14 right-10 w-12 h-12 rounded-xl bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30"></div>
                    <div className="absolute bottom-16 left-16 w-20 h-20 rounded-xl bg-violet-500/20 backdrop-blur-md border border-violet-500/30"></div>
                    <div className="absolute bottom-10 right-12 w-24 h-16 rounded-xl bg-primary-500/20 backdrop-blur-md border border-primary-500/30"></div>
                  </motion.div>
                  <div className="relative z-10 mt-4 text-center">
                    <div className="inline-block text-4xl mb-4">
                      <i className="fas fa-code text-primary-500"></i>
                    </div>
                    <div className="font-mono text-sm opacity-80 mb-2 font-tech dark:text-white">
                      <span className="text-blue-500">const</span> <span className="text-green-500">future</span> = <span className="text-violet-500">await</span> relsoft.build(yourIdea);
                    </div>
                    <div className="font-tech text-xl font-medium dark:text-white">
                      Transforming ideas into reality
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl -z-10 opacity-50 blur-2xl"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
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
                <div className="h-8 text-slate-400 dark:text-slate-600 flex items-center">
                  <i className={`${partner.icon} text-2xl mr-2`}></i>
                  <span className="font-medium">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We provide a comprehensive range of technology solutions to meet your business needs
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200 dark:border-slate-700`}
                variants={childVariant}
              >
                <div className={`w-14 h-14 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-5`}>
                  <i className={`${service.icon} text-2xl text-${service.color}-500`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Talk to an expert
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Stay updated with our latest articles, insights, and company news
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogs.map((blog, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700"
                variants={childVariant}
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`bg-${blog.categoryColor}-100 dark:bg-${blog.categoryColor}-900/30 text-${blog.categoryColor}-800 dark:text-${blog.categoryColor}-300 text-xs px-3 py-1 rounded-full`}>
                      {blog.category}
                    </span>
                    <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {blog.description}
                  </p>
                  <Link href={blog.link} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
                    Read more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
              View all articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="py-12 px-8 md:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-16 -mr-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-8 -ml-8"></div>
              
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business with technology?</h2>
                <p className="text-blue-100 text-lg mb-8">
                  Partner with Relsoft to build innovative solutions that drive growth and efficiency. Let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
                  </Link>
                  <Link href="/services" className="inline-flex justify-center items-center px-6 py-3 border border-white/30 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
