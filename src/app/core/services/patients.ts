import { Injectable } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class Patients {
  constructor(private supabase: Supabase) {}

  async getAll() {
    return await this.supabase.client
      .from('patients')
      .select('*')
      .order('id', { ascending: false });
  }

  async create(patient: any) {
    return await this.supabase.client
      .from('patients')
      .insert(patient);
  }

  async update(id: number, patient: any) {
    return await this.supabase.client
      .from('patients')
      .update(patient)
      .eq('id', id);
  }

  async delete(id: number) {
    return await this.supabase.client
      .from('patients')
      .delete()
      .eq('id', id);
  }
}