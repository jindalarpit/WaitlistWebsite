import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Waitlist endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const parsedData = insertWaitlistSchema.parse(req.body);
      const waitlistEntry = await storage.createWaitlistEntry(parsedData);
      res.status(201).json({ message: "Successfully added to waitlist", data: waitlistEntry });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const parsedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactEntry(parsedData);
      res.status(201).json({ message: "Message received successfully", data: contact });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get waitlist entries - for admin purposes
  app.get("/api/waitlist", async (req, res) => {
    try {
      const waitlistEntries = await storage.getWaitlistEntries();
      res.status(200).json(waitlistEntries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch waitlist entries" });
    }
  });

  // Get contact entries - for admin purposes
  app.get("/api/contact", async (req, res) => {
    try {
      const contactEntries = await storage.getContactEntries();
      res.status(200).json(contactEntries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact entries" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
