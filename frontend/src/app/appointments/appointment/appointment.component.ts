import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/shared/models/appointment.interface';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @Input() appointment: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

}
