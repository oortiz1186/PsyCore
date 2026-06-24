import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabase';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  async getAppointments() {
    const { data, error } = await supabase
      .from('appointments')
      .select(`
        *,
        patients (
          id,
          first_name,
          last_name
        )
      `)
      .order('appointment_date', { ascending: true });

    if (error) throw error;
    return data;
  }

  async createAppointment(appointment: any) {
    const { data, error } = await supabase
      .from('appointments')
      .insert([appointment])
      .select();

    if (error) throw error;
    return data;
  }
}