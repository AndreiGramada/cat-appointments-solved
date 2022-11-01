import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { AppointmentsComponent } from 'src/app/appointments/appointments.component';
import { AppointmentComponent } from 'src/app/appointments/appointment/appointment.component';
import { NewAppointmentComponent } from 'src/app/new-appointment/new-appointment.component';
import { AppointmentsService } from 'src/shared/services/appointments.service';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppointmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
