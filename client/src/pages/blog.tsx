import { motion } from "framer-motion";
import { pageTransition, staggerContainer, childVariant, formatDate } from "@/lib/utils";
import { Link } from "wouter";

// Blog articles
const articles = [
  {
    id: "ai-trends-2023",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "AI",
    categoryColor: "blue",
    date: "2023-06-12",
    title: "The Future of AI in Business: 2023 Trends",
    description: "Explore how artificial intelligence is reshaping industries and creating new opportunities for innovation.",
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "react-optimization",
    image: "https://images.unsplash.com/photo-1559030623-0226c1bc98f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "Development",
    categoryColor: "indigo",
    date: "2023-05-28",
    title: "Optimizing React Applications for Performance",
    description: "Learn advanced techniques to improve the speed and responsiveness of your React web applications.",
    author: {
      name: "Michael Chang",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "cloud-migration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "Cloud",
    categoryColor: "violet",
    date: "2023-05-15",
    title: "5 Steps to a Successful Cloud Migration",
    description: "A comprehensive guide to moving your infrastructure to the cloud while minimizing risks and downtime.",
    author: {
      name: "John Davis",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "ci-cd-pipelines",
    image: "https://images.unsplash.com/photo-1581093577421-e484c90202f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "DevOps",
    categoryColor: "green",
    date: "2023-05-02",
    title: "Building Efficient CI/CD Pipelines for Modern Applications",
    description: "How to implement continuous integration and delivery pipelines to improve development workflow and product quality.",
    author: {
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "machine-learning-practical",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "AI",
    categoryColor: "blue",
    date: "2023-04-18",
    title: "Practical Machine Learning: From Theory to Implementation",
    description: "A step-by-step guide to implementing machine learning models in real-world business applications.",
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "mobile-ux-design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=340&q=80",
    category: "Design",
    categoryColor: "pink",
    date: "2023-04-05",
    title: "Mobile UX Design Trends That Enhance User Engagement",
    description: "Explore the latest UX design trends that are helping mobile apps increase user retention and satisfaction.",
    author: {
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  }
];

// Available categories for filtering
const categories = [
  { name: "All", id: "all" },
  { name: "AI", id: "ai", color: "blue" },
  { name: "Development", id: "development", color: "indigo" },
  { name: "Cloud", id: "cloud", color: "violet" },
  { name: "DevOps", id: "devops", color: "green" },
  { name: "Design", id: "design", color: "pink" }
];

const BlogPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Blog Header */}
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
              Our <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Blog</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400"
              variants={childVariant}
            >
              Stay updated with our latest articles, insights, and company news
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Filter */}
      <section className="py-8 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category.id === 'all' 
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article) => (
              <motion.div 
                key={article.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700"
                variants={childVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href={`/blog/${article.id}`}>
                  <a className="block">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                  </a>
                </Link>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`bg-${article.categoryColor}-100 dark:bg-${article.categoryColor}-900/30 text-${article.categoryColor}-800 dark:text-${article.categoryColor}-300 text-xs px-3 py-1 rounded-full`}>
                      {article.category}
                    </span>
                    <span className="ml-auto text-sm text-slate-500 dark:text-slate-400">{formatDate(article.date)}</span>
                  </div>
                  <Link href={`/blog/${article.id}`}>
                    <a className="block">
                      <h3 className="text-xl font-bold mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{article.title}</h3>
                    </a>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={article.author.image} 
                        alt={article.author.name} 
                        className="w-8 h-8 rounded-full mr-2 object-cover" 
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{article.author.name}</span>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <a className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm">
                        Read more <i className="fas fa-arrow-right ml-1 text-xs"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get the latest articles, updates, and insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;
