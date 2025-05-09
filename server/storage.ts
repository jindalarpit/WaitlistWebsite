import { 
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  contacts, type Contact, type InsertContact
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  getWaitlistEntries(): Promise<Waitlist[]>;
  getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  
  // Contact methods
  getContactEntries(): Promise<Contact[]>;
  createContactEntry(entry: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, Waitlist>;
  private contactEntries: Map<number, Contact>;
  
  private userCurrentId: number;
  private waitlistCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.contactEntries = new Map();
    
    this.userCurrentId = 1;
    this.waitlistCurrentId = 1;
    this.contactCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Waitlist methods
  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }
  
  async getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlistEntries.values()).find(
      (entry) => entry.email === email,
    );
  }
  
  async createWaitlistEntry(insertWaitlist: InsertWaitlist): Promise<Waitlist> {
    const id = this.waitlistCurrentId++;
    const createdAt = new Date().toISOString();
    const entry: Waitlist = { ...insertWaitlist, id, createdAt };
    this.waitlistEntries.set(id, entry);
    return entry;
  }
  
  // Contact methods
  async getContactEntries(): Promise<Contact[]> {
    return Array.from(this.contactEntries.values());
  }
  
  async createContactEntry(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const createdAt = new Date().toISOString();
    const entry: Contact = { ...insertContact, id, createdAt };
    this.contactEntries.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
