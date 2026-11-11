import { Injectable} from '@angular/core';


export interface BookingRequest {
  fullName: string;
  phone: string;
  patientType: string;
  service: string;
  date: string; // yyyy-mm-dd from the date input
  time: string;
  notes: string;
}

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  // TODO: the practice's WhatsApp number in international format,
  // digits only: no "+", no spaces, no leading 0 (e.g. 27821234567)
  private readonly practiceNumber = '27734729577';

  /** Builds the text that will be pre-filled in WhatsApp. */
  buildMessage(data: Partial<BookingRequest>): string {
    const blank = '…';
    const lines = [
      'Hello Cedar Smiles Dental Clinic, I would like to request an appointment.',
      '',
      `Name: ${data.fullName?.trim() || blank}`,
      `Phone: ${data.phone?.trim() || blank}`,
      `Patient type: ${data.patientType || blank}`,
      `Service: ${data.service || blank}`,
      `Preferred date: ${this.formatDate(data.date) || blank}`,
      `Preferred time: ${data.time || blank}`,
    ];

    if (data.notes?.trim()) {
      lines.push(`Notes: ${data.notes.trim()}`);
    }

    lines.push('', 'Thank you.');
    return lines.join('\n');
  }

  /** Generates the WhatsApp link with the message pre-filled. */
  buildUrl(message: string): string {
    return `https://wa.me/${this.practiceNumber}?text=${encodeURIComponent(message)}`;
  }

  /** Opens WhatsApp (app on phones, WhatsApp Web on desktop). */
  open(data: BookingRequest): void {
    const url = this.buildUrl(this.buildMessage(data));
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  private formatDate(value?: string): string {
    if (!value) return '';
    const date = new Date(`${value}T00:00:00`);
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}