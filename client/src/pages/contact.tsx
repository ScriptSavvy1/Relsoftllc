import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition, staggerContainer, childVariant } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    color: "blue",
    title: "Location",
    content: [
      "123 Tech Avenue",
      "San Francisco, CA 94107"
    ]
  },
  {
    icon: "fas fa-envelope",
    color: "indigo",
    title: "Email",
    content: [
      { text: "info@relsoft.com", link: "mailto:info@relsoft.com" },
      { text: "support@relsoft.com", link: "mailto:support@relsoft.com" }
    ]
  },
  {
    icon: "fas fa-phone",
    color: "violet",
    title: "Phone",
    content: [
      { text: "+1 (415) 555-0123", link: "tel:+14155550123" },
      { text: "+1 (415) 555-0124", link: "tel:+14155550124" }
    ]
  }
];

const socialLinks = [
  { icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
  { icon: "fab fa-twitter", url: "https://twitter.com" },
  { icon: "fab fa-github", url: "https://github.com" },
  { icon: "fab fa-facebook-f", url: "https://facebook.com" }
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacyPolicy: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Contact Header */}
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
              Get in <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              variants={childVariant}
            >
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 h-full border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mr-4`}>
                        <i className={`${item.icon} text-${item.color}-500`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {item.content.map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                              {typeof line === 'string' ? (
                                line
                              ) : (
                                <a 
                                  href={line.link}
                                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                  {line.text}
                                </a>
                              )}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
                        aria-label={`Connect with us on ${link.icon.split('-')[2]}`}
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1332402817506!2d-122.39662108467051!3d37.78197597975722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807b2e780f1d%3A0x1f5b670f42667330!2s123%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1625612010621!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white" 
                      placeholder="Your name" 
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white" 
                      placeholder="your.email@example.com" 
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white" 
                      placeholder="How can we help you?" 
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white" 
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input 
                        id="privacy-policy" 
                        type="checkbox"
                        {...register("privacyPolicy")} 
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded"
                      />
                      <label htmlFor="privacy-policy" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">
                        I agree to the <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    {errors.privacyPolicy && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.privacyPolicy.message}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What technologies do you specialize in?",
                  answer: "We specialize in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, AWS, Azure, and various AI/ML frameworks. Our expertise spans across web, mobile, cloud, and artificial intelligence development."
                },
                {
                  question: "How do you approach new projects?",
                  answer: "We begin with a discovery phase to understand your business goals and requirements. Then we create a detailed proposal and roadmap. Once approved, we follow an agile development process with regular updates and feedback sessions to ensure the final product meets your expectations."
                },
                {
                  question: "What is your typical timeline for projects?",
                  answer: "Project timelines vary based on complexity and scope. Simple websites might take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial proposal after understanding your specific requirements."
                },
                {
                  question: "Do you provide maintenance and support after launch?",
                  answer: "Yes, we offer ongoing maintenance and support packages to keep your application secure, up-to-date, and running smoothly. We can customize a support plan based on your specific needs and budget."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
