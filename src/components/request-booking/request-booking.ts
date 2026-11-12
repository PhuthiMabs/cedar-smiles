import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';


@Component({
  imports: [ReactiveFormsModule],
  standalone: true,
  selector: 'app-request-booking',
  styleUrl: './request-booking.css',
  templateUrl: './request-booking.html',
})
export class RequestBooking {
  private fb = inject(FormBuilder);
  private whatsapp = inject(WhatsappService);

  // Keep these in sync with your Services page
  services = [
    'Check-up & Cleaning',
    'Threatre Care',
    'Fillings & Restorations',
    'Braces & Alignment',
    'Children’s Dentistry',
    'Emergency Care',
    'Other / Not sure',
  ];

  times = ['Morning', 'Afternoon', 'No preference'];

  submitted = false;
  today = this.localToday();

  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s-]{9,15}$/)]],
    patientType: ['New patient'],
    service: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    notes: [''],
  });

  /** Live preview of the message, updates as the patient types. */
  get preview(): string {
    return this.whatsapp.buildMessage(this.form.getRawValue());
  }

  get whatsappUrl(): string {
    return this.whatsapp.buildUrl(this.preview);
  }

  hasError(name: string): boolean {
    const control = this.form.get(name);
    return !!control && control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.whatsapp.open(this.form.getRawValue());
    this.submitted = true;
  }

  reset(): void {
    this.form.reset({ patientType: 'New patient' });
    this.submitted = false;
  }

  private localToday(): string {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  }
}
