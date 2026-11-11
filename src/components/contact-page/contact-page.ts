import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string; // SVG path data (24x24, stroke based)
  external: boolean;
}

interface OpeningHour {
  day: string;
  time: string;
}

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-contact-page',
  styleUrl: './contact-page.css',
  templateUrl: './contact-page.html',
})
export class ContactPage {
  // TODO: replace every value below with the practice's real details
  practice = {
    phoneDisplay: '+27 00 000 0000',
    phoneDigits: '27000000000', // no spaces or +, used for tel: and WhatsApp
    email: 'info@cedarsmiles.co.za',
    address: ['Street address', 'Suburb, City', 'Postal code'],
  };

  // TODO: replace with the practice's real operating hours
  hours: OpeningHour[] = [
    { day: 'Monday – Friday', time: '08:00 – 17:00' },
    { day: 'Saturday', time: '08:00 – 13:00' },
    { day: 'Sunday & Public Holidays', time: 'Emergencies Only' },
  ];

  get mapsUrl(): string {
    const query = encodeURIComponent(this.practice.address.join(', '));
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  get methods(): ContactMethod[] {
    const p = this.practice;
    return [
      {
        label: 'Call us',
        value: p.phoneDisplay,
        href: `tel:+${p.phoneDigits}`,
        external: false,
        icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
      },
      {
        label: 'WhatsApp',
        value: 'Chat with us',
        href: `https://wa.me/${p.phoneDigits}`,
        external: true,
        icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
      },
      {
        label: 'Email us',
        value: p.email,
        href: `mailto:${p.email}`,
        external: false,
        icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
      },
      {
        label: 'Visit us',
        value: p.address.join(', '),
        href: this.mapsUrl,
        external: true,
        icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
      },
    ];
  }
}
