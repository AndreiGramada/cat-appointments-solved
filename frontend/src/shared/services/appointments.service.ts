import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, withLatestFrom } from 'rxjs';
import { Appointment } from '../models/appointment.interface';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  appointments$: BehaviorSubject<Appointment[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getAppointments$(): void {
    this.http.get<Appointment[]>('http://localhost:3000/cats')
      .subscribe({
        next: (appointments: Appointment[]) => this.appointments$.next(appointments),
        error: () => console.error('Could not get the appointments')
      })
  }

  saveAppointment$(appointment: Appointment) {
    this.http.post('http://localhost:3000/cats', appointment)
      .pipe(
        withLatestFrom(this.appointments$),
        map(([newAppointment, appointments]: [Appointment, Appointment[]]) => [...appointments, newAppointment])
      )
      .subscribe({
        next: (appointments: Appointment[]) => this.appointments$.next(appointments),
        error: () => console.error('Could not save the appointment')
      })
  }
}