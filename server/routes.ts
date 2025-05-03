import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact message
      const contact = await storage.createContact(contactData);
      
      // Return success
      return res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
