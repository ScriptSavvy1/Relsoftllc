import { db } from "./db/drizzle.config";
import { users, contactMessages } from "./db/schema";
import { eq } from "drizzle-orm";

export async function getUser(id: number) {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  });
}

export async function createUser(username: string, password: string) {
  return db.insert(users).values({ username, password }).returning();
}

export async function createContactMessage(name: string, email: string, subject: string, message: string) {
  return db.insert(contactMessages).values({ name, email, subject, message }).returning();
}

export async function getContactMessages() {
  return db.query.contactMessages.findMany();
}
