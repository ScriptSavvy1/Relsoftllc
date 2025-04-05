import { supabase } from './db/supabase';

export interface User {
  id: number;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export async function getUser(id: number): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }
  
  return data;
}

export async function createUser(username: string, password: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .insert([{ username, password }])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating user:', error);
    return null;
  }
  
  return data;
}

export async function createContactMessage(
  name: string, 
  email: string, 
  subject: string, 
  message: string
): Promise<ContactMessage | null> {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, subject, message }])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating contact message:', error);
    return null;
  }
  
  return data;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching contact messages:', error);
    return [];
  }
  
  return data || [];
}
