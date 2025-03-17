import { motion } from "framer-motion";
import { pageTransition, staggerContainer, childVariant } from "@/lib/utils";
import { Link } from "wouter";

const services = [
  {
    id: "ai",
    icon: "fas fa-robot",
    color: "blue",
    title: "AI Solutions",
    description: "Custom artificial intelligence solutions including machine learning models, predictive analytics, and natural language processing.",
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics",
      "AI Integration with Existing Systems",
      "Conversational AI & Chatbots"
    ]
  },
  {
    id: "web",
    icon: "fas fa-code",
    color: "indigo",
    title: "Web Development",
    description: "Modern web applications built with React, TypeScript, and other cutting-edge technologies to deliver exceptional user experiences.",
    features: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Systems (Node.js, Python, Java)",
      "Progressive Web Applications",
      "E-commerce Platforms",
      "CMS Integration",
      "Performance Optimization"
    ]
  },
  {
    id: "digital-marketing",
    icon: "fas fa-bullhorn",
    color: "green",
    title: "Digital Marketing",
    description: "Strategic digital marketing services that drive growth, engagement, and conversion through data-driven campaigns and optimization.",
    features: [
      "SEO & Content Strategy",
      "Social Media Marketing",
      "PPC & Paid Advertising",
      "Email Marketing Campaigns",
      "Analytics & Performance Tracking",
      "Conversion Rate Optimization"
    ]
  },
  {
    id: "cms",
    icon: "fas fa-columns",
    color: "violet",
    title: "CMS Design",
    description: "Custom content management systems that make content creation and management simple, secure, and efficient.",
    features: [
      "Custom CMS Development",
      "WordPress Solutions",
      "Headless CMS Architecture",
      "Content Workflow Automation",
      "Multi-channel Publishing",
      "CMS Migration & Integration"
    ]
  },
  {
    id: "training",
    icon: "fas fa-laptop-code",
    color: "blue",
    title: "Coding Training",
    description: "Comprehensive training programs to help your team master the latest programming languages and development practices.",
    features: [
      "Full-stack Development Programs",
      "Language-specific Courses",
      "DevOps & CI/CD Practices",
      "Agile Development Methodology",
      "Test-driven Development",
      "Code Reviews & Best Practices"
    ]
  },
  {
    id: "mobile",
    icon: "fas fa-mobile-alt", 
    color: "indigo",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional experiences across iOS and Android devices.",
    features: [
      "iOS & Android Native Apps",
      "Cross-platform Development (React Native, Flutter)",
      "Mobile App Design",
      "App Store Optimization",
      "App Maintenance & Updates",
      "Mobile Backend Services"
    ]
  },
  {
    id: "ai-agents",
    icon: "fas fa-brain",
    color: "purple",
    title: "AI Agents for Business",
    description: "Custom AI agents and automation solutions that transform business operations, customer service, and data processing workflows.",
    features: [
      "Custom GPT Solutions",
      "Intelligent Customer Service Agents",
      "Document Processing Automation",
      "Business Process Automation",
      "Data Analysis Agents",
      "Multi-agent Systems & Workflows"
    ]
  },
  {
    id: "branding",
    icon: "fas fa-palette",
    color: "pink",
    title: "Branding",
    description: "Comprehensive branding solutions that build memorable, cohesive brand identities that resonate with your target audience.",
    features: [
      "Brand Strategy Development",
      "Visual Identity Design",
      "Logo & Typography",
      "Brand Guidelines",
      "Brand Messaging & Voice",
      "Rebranding & Brand Refresh"
    ]
  }
];

const ServicesPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Header */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={childVariant}
            >
              Our <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              variants={childVariant}
            >
              We provide comprehensive technology solutions tailored to your business needs. Our expert team delivers innovation, quality, and results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Left side for even index, right side for odd index */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-full lg:w-1/2 px-4 sm:px-6">
                      <div className={`w-14 h-14 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-6`}>
                        <i className={`${service.icon} text-2xl text-${service.color}-500`}></i>
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300">
                        Get Started <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                    <div className="w-full lg:w-1/2 relative px-4 sm:px-6 mt-8 lg:mt-0">
                      <div className={`w-full h-64 sm:h-72 md:h-80 rounded-xl bg-gradient-to-br from-${service.color}-500/20 to-slate-100 dark:from-${service.color}-500/10 dark:to-slate-800 p-6 sm:p-8 border border-${service.color}-200 dark:border-${service.color}-900/30 shadow-xl flex items-center justify-center`}>
                        <i className={`${service.icon} text-6xl sm:text-7xl text-${service.color}-500/50`}></i>
                      </div>
                      <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-${service.color}-600 to-slate-600 rounded-xl -z-10 opacity-40 blur-xl`}></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:w-1/2 relative order-1 lg:order-none">
                      <div className={`w-full h-64 sm:h-72 md:h-80 rounded-xl bg-gradient-to-br from-${service.color}-500/20 to-slate-100 dark:from-${service.color}-500/10 dark:to-slate-800 p-6 sm:p-8 border border-${service.color}-200 dark:border-${service.color}-900/30 shadow-xl flex items-center justify-center`}>
                        <i className={`${service.icon} text-6xl sm:text-7xl text-${service.color}-500/50`}></i>
                      </div>
                      <div className={`absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-${service.color}-600 to-slate-600 rounded-xl -z-10 opacity-40 blur-xl`}></div>
                    </div>
                    <div className="lg:w-1/2 order-none lg:order-1">
                      <div className={`w-14 h-14 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-6`}>
                        <i className={`${service.icon} text-2xl text-${service.color}-500`}></i>
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300">
                        Get Started <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Contact us today to discuss your project requirements and how our services can help you achieve your business goals.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
