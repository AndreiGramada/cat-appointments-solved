import { Component } from '@angular/core';
import { Appointment } from 'src/shared/models/appointment.interface';
import { AppointmentsService } from 'src/shared/services/appointments.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent {
  appointment: Appointment = {
    catName: null,
    catColor: null,
    description: null,
    date: null
  };
  
  constructor(private appointmentsService: AppointmentsService) { }


  saveAppointment():void {
    this.appointmentsService.saveAppointment$({
      ...this.appointment,
      id: Math.random()
    })
  }
}
