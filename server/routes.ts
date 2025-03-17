import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.extend({
        privacyPolicy: z.boolean().refine(val => val === true, {
          message: "You must agree to the Privacy Policy",
        })
      }).parse(req.body);

      // Remove the privacyPolicy field before storing
      const { privacyPolicy, ...messageData } = contactData;
      
      // Store contact message
      const contactMessage = await storage.createContactMessage(messageData);
      
      // In a real app, you might send an email notification here
      
      return res.status(201).json({
        message: "Contact message received successfully",
        id: contactMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      console.error("Error creating contact message:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all contact messages (would typically be protected in production)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
