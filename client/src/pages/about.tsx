import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1E293B]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 min-h-[80vh] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#39509A]/5 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#39509A]/5 animate-pulse delay-500"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ opacity, scale }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-6 hover:bg-[#39509A]/20 transition-colors duration-300"
            >
              <i className="fas fa-info-circle mr-2"></i>
              About Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#39509A] to-[#39509A]/80 bg-clip-text text-transparent"
            >
              Our Story & Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              We're a team of passionate developers and innovators dedicated to
              creating exceptional software solutions that drive business growth
              and digital transformation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#39509A] text-white rounded-xl font-medium hover:bg-[#39509A]/90 transition-colors duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-[#39509A] border-2 border-[#39509A] rounded-xl font-medium hover:bg-[#39509A]/10 transition-colors duration-300"
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#F4F7FC] dark:bg-[#1E293B] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#39509A]/20 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about/team.svg"
                  alt="Our Team"
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-4">
                <i className="fas fa-history mr-2"></i>
                Our Journey
              </div>
              <h2 className="text-3xl font-bold text-[#39509A]">
                Building the Future of Technology
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Founded in 2019, Relsoft has grown from a small startup to a
                leading technology solutions provider. Our journey has been
                marked by continuous innovation, client success, and a
                commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    number: "5+",
                    label: "Years Experience",
                    icon: "fas fa-calendar-alt",
                  },
                  {
                    number: "100+",
                    label: "Projects Completed",
                    icon: "fas fa-project-diagram",
                  },
                  {
                    number: "50+",
                    label: "Happy Clients",
                    icon: "fas fa-users",
                  },
                  { number: "24/7", label: "Support", icon: "fas fa-headset" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-[#1E293B]/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#39509A]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${stat.icon} text-xl text-[#39509A]`}></i>
                    </div>
                    <div className="text-3xl font-bold text-[#39509A] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-[#1E293B]/50 rounded-2xl shadow-lg p-8 md:p-10 border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#39509A]/10 to-transparent -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#39509A]/10 to-transparent -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/4 flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#39509A]/10 shadow-lg mb-4 group-hover:border-[#39509A]/30 transition-colors duration-300">
                    <img
                      src="/images/team/director.svg"
                      alt="Director"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#39509A] text-center">
                    John Davis
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                    Director, RELSOFT
                  </p>
                </div>

                <div className="w-full md:w-3/4">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-[#39509A]">
                    <i className="fas fa-quote-left text-[#39509A]/50 mr-3 text-xl"></i>
                    Director's Message
                  </h2>

                  <div className="text-slate-600 dark:text-slate-400 space-y-4 relative text-sm sm:text-base">
                    <p>Dear valued customers and visitors,</p>

                    <p>
                      Welcome to RELSOFT, the one-stop technology solutions! As
                      the Director of RELSOFT, I am thrilled to have you here
                      and to share with you a little bit about who we are and
                      what we do.
                    </p>

                    <p>
                      At RELSOFT we are a team of passionate technologists who
                      are dedicated to using our expertise to drive innovation
                      and deliver solutions that make a difference. With a focus
                      on web design, graphic design, software development,
                      digital marketing, and IT consultation.
                    </p>

                    <p>
                      Thank you for choosing RELSOFT and for taking the time to
                      visit our website. If you have any questions or need
                      assistance, please don't hesitate to reach out to us. We
                      are here to help.
                    </p>

                    <p>Sincerely,</p>

                    <div className="text-[#39509A] font-bold italic">
                      John Davis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-4">
              <i className="fas fa-star mr-2"></i>
              Our Core Values
            </div>
            <h2 className="text-3xl font-bold text-[#39509A] mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              These principles guide everything we do and help us deliver
              exceptional results for our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Innovation",
                description:
                  "We constantly explore new technologies and methodologies to stay ahead of the curve.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: "fas fa-users",
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and open communication with our clients.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: "fas fa-check-circle",
                title: "Excellence",
                description:
                  "We maintain the highest standards in every project we undertake.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F4F7FC] dark:bg-[#1E293B]/50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#39509A] mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F4F7FC] dark:bg-[#1E293B] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#39509A]/10 text-[#39509A] text-sm font-medium mb-4">
              <i className="fas fa-users mr-2"></i>
              Meet Our Team
            </div>
            <h2 className="text-3xl font-bold text-[#39509A] mb-4">
              The People Behind Our Success
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              A diverse group of talented professionals passionate about
              creating innovative solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                image: "/images/team/member1.svg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Jane Smith",
                role: "CTO",
                image: "/images/team/member2.svg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Mike Johnson",
                role: "Lead Developer",
                image: "/images/team/member3.svg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Sarah Williams",
                role: "Project Manager",
                image: "/images/team/member4.svg",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#1E293B]/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#39509A] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="text-slate-400 hover:text-[#39509A] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`fab fa-${platform} text-lg`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#39509A] to-[#39509A]/80 rounded-3xl p-12 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <i className="fas fa-rocket mr-2"></i>
                Ready to Start?
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our
                innovative solutions.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#39509A] rounded-xl font-medium hover:bg-white/90 transition-colors duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
