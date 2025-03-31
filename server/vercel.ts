import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
registerRoutes(app);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

// Export for Vercel
export default app; 