import { Injectable } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private supabaseService: Supabase) {}

  async login(email: string, password: string) {
    return await this.supabaseService.client.auth.signInWithPassword({
      email,
      password,
    });
  }

  async logout() {
    return await this.supabaseService.client.auth.signOut();
  }

  async getUser() {
    return await this.supabaseService.client.auth.getUser();
  }
}