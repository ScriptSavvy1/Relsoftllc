import { motion } from "framer-motion";
import { pageTransition, staggerContainer, childVariant } from "@/lib/utils";
import { Link } from "wouter";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Team Members", value: "50+" },
  { label: "Client Satisfaction", value: "98%" },
];

const values = [
  {
    icon: "fas fa-lightbulb",
    color: "blue",
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to solve complex problems."
  },
  {
    icon: "fas fa-users",
    color: "indigo",
    title: "Collaboration",
    description: "We work closely with clients as partners to achieve shared goals and success."
  },
  {
    icon: "fas fa-check-circle",
    color: "violet",
    title: "Excellence",
    description: "We hold ourselves to the highest standards of quality and professionalism."
  },
  {
    icon: "fas fa-rocket",
    color: "blue",
    title: "Growth",
    description: "We continuously learn and develop our skills to stay at the forefront of technology."
  }
];

const team = [
  {
    name: "John Davis",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    links: [
      { icon: "fab fa-linkedin", url: "https://linkedin.com" },
      { icon: "fab fa-twitter", url: "https://twitter.com" }
    ]
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    links: [
      { icon: "fab fa-linkedin", url: "https://linkedin.com" },
      { icon: "fab fa-github", url: "https://github.com" }
    ]
  },
  {
    name: "Michael Chang",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    links: [
      { icon: "fab fa-linkedin", url: "https://linkedin.com" },
      { icon: "fab fa-github", url: "https://github.com" }
    ]
  },
  {
    name: "Emily Rodriguez",
    role: "UX Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    links: [
      { icon: "fab fa-linkedin", url: "https://linkedin.com" },
      { icon: "fab fa-dribbble", url: "https://dribbble.com" }
    ]
  }
];

const AboutPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* About Header */}
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
              About <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Relsoft</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              variants={childVariant}
            >
              Our mission is to empower businesses through innovative technology solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center mb-16">
            <motion.div 
              className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                At Relsoft, we're driven by a passion for technology and innovation. Our mission is to help businesses of all sizes harness the power of software to achieve their goals, streamline operations, and create exceptional user experiences.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that provide real value. Our team of experts combines technical excellence with creative problem-solving to deliver results that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">{stat.value}</div>
                    <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaborating" 
                  className="rounded-xl shadow-xl w-full object-cover" 
                  style={{ height: '480px' }}
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent -z-10"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-slate-700 shadow-md mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                      alt="Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">John Davis</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center">Director, RELSOFT</p>
                </div>
                
                <div className="w-full md:w-3/4">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-quote-left text-blue-500/50 mr-3 text-xl"></i>
                    Director's Message
                  </h2>
                  
                  <div className="text-slate-700 dark:text-slate-300 space-y-4 relative text-sm sm:text-base">
                    <p>Dear valued customers and visitors,</p>
                    
                    <p>Welcome to RELSOFT, the one-stop technology solutions! As the Director of RELSOFT, I am thrilled to have you here and to share with you a little bit about who we are and what we do.</p>
                    
                    <p>At RELSOFT we are a team of passionate technologists who are dedicated to using our expertise to drive innovation and deliver solutions that make a difference. With a focus on web design, graphic design, software development, digital marketing, and IT consultation.</p>
                    
                    <p>Thank you for choosing RELSOFT and for taking the time to visit our website. If you have any questions or need assistance, please don't hesitate to reach out to us. We are here to help.</p>
                    
                    <p>Sincerely,</p>
                    
                    <div className="text-blue-600 dark:text-blue-400 font-bold italic">John Davis</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              These core principles guide everything we do and define how we work with our clients and each other.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
                variants={childVariant}
              >
                <div className={`w-12 h-12 rounded-lg bg-${value.color}-500/10 flex items-center justify-center mb-4`}>
                  <i className={`${value.icon} text-xl text-${value.color}-500`}></i>
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Meet the talented individuals who make our company exceptional
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
                variants={childVariant}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-5">
                  <h4 className="text-lg font-bold">{member.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{member.role}</p>
                  <div className="flex space-x-3">
                    {member.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-primary-500 transition-colors"
                        aria-label={`${member.name}'s ${link.icon.split('-')[2]}`}
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We're always looking for talented individuals to join our growing team. Check out our current openings.
            </p>
            <Link href="/careers" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
