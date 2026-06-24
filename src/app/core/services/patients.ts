import { Injectable } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class Appointments {
  constructor(private supabase: Supabase) {}

  async getAll() {
    return await this.supabase.client
      .from('appointments')
      .select(`
        *,
        patients (
          id,
          first_name,
          last_name
        )
      `)
      .order('appointment_date', { ascending: false });
  }

  async create(appointment: any) {
    return await this.supabase.client
      .from('appointments')
      .insert(appointment);
  }

  async update(id: number, appointment: any) {
    return await this.supabase.client
      .from('appointments')
      .update(appointment)
      .eq('id', id);
  }

  async delete(id: number) {
    return await this.supabase.client
      .from('appointments')
      .delete()
      .eq('id', id);
  }
}