import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  text: string;
  icon: string; // SVG path data (24x24, stroke based)
}

interface Assurance {
  title: string;
  text: string;
}

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-services-page',
  styleUrl: './services-page.css',
  templateUrl: './services-page.html',
})
export class ServicesPage {
  // TODO: edit to match the treatments Cedar Smiles actually offers.
  // Titles must match the service list in the Request Booking page.
  services: Service[] = [


{
      title: 'General  Dentistry',
      text: 'Dental exam, cleanings, flouride treatment and fissure sealants ',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
    },
    {
      title: 'Restorative Dentistry',
      text: 'Dental fillings, root canal treatment, crowns, bridges and dentures',
      icon: 'M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6l1.4 1.4 M17 17l1.4 1.4 M5.6 18.4L7 17 M17 7l1.4-1.4 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    },
    {
      title: 'Cosmetic & Aesthetic Dentistry',
      text: 'Teeth whitening, composite bonding, veneers, aesthetic restorations.',
      icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    },
    {
      title: 'Extractions',
      text: 'Normal and surgical (chair-side & theatre options available)',
      icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01',
    },
    {
      title: 'Paediatric Dentistry',
      text: 'Dental exams, cleaning, flouride treatment, fillings, extractions and space maintainers (chair-side & theatre options available)',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
    },
    {
      title: '  Orthodontics',
      text: 'Braces and clear aligners',
      icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
    },

  

    {
      title: 'Theatre Care',
      text: 'Certain treatmeants under general anaesthesia for patients with anxiety, special needs and children.',
      icon: 'M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6l1.4 1.4 M17 17l1.4 1.4 M5.6 18.4L7 17 M17 7l1.4-1.4 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    },
   
   
    {
      title: 'Emergency Dentistry',
      text: 'Toothache or a dental injury? Contact us and we will help as soon as we can.',
      icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
    },


  ];

  assurances: Assurance[] = [
    {
      title: 'Comfort first',
      text: 'Every treatment is explained clearly and tailored to keep you comfortable.',
    },
    {
      title: 'Personalised care',
      text: 'Your treatment plan is built around your needs, not a one-size-fits-all approach.',
    },
    {
      title: 'Not sure what you need?',
      text: 'Choose “Other / Not sure” when booking and we will guide you from there.',
    },
  ];
}
