import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/shared/models/appointment.interface';
import { AppointmentsService } from 'src/shared/services/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[];

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.appointmentsService.getAppointments$();

    this.appointmentsService.appointments$
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
      })
  }

}
