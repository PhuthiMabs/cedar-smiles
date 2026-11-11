import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface Pillar {
  title: string;
  text: string;
}

interface Value {
  title: string;
  icon: string; // SVG path data (24x24, stroke based)
}


@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-about-us',
  styleUrl: './about-us.css',
  templateUrl: './about-us.html',
})
export class AboutUs {
  pillars: Pillar[] = [
    {
      title: 'Clinical excellence',
      text: 'Modern dental techniques combined with a high standard of clinical care.',
    },
    {
      title: 'Patient-centred philosophy',
      text: 'Compassion guides every decision, so your needs always come first.',
    },
    {
      title: 'Comfortable and reassuring',
      text: 'Every visit is personalised to make you feel at ease from start to finish.',
    },
    {
      title: 'Lasting relationships',
      text: 'We build trust through transparency and quality care, visit after visit.',
    },
  ];

  careTypes: string[] = [
    'Routine check-ups',
    'Restorative treatment',
    'Cosmetic enhancement',
  ];

  values: Value[] = [
    {
      title: 'Compassion',
      icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    },
    {
      title: 'Integrity',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
    },
    {
      title: 'Clinical excellence',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    },
    {
      title: 'Patient comfort',
      icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01',
    },
    {
      title: 'Family-centred care',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
    },
  ];
}
