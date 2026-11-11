import { RouterLink } from '@angular/router';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

interface Service {
  title: string;
  text: string;
  icon: string; // SVG path data (24x24, stroke based)
}
 
interface Feature {
  title: string;
  text: string;
}
 
interface Step {
  title: string;
  text: string;
}
 
interface OpeningHour {
  day: string;
  time: string;
}

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})

export class HomePage {
  // Short trust points shown under the hero (edit to match the practice)
  highlights: string[] = [
    'Gentle, comfortable care',
    'Modern dental equipment',
    'Child friendly',
    'Care for the whole family',
  ];
 
  // Keep these in sync with your Services page
  services: Service[] = [
    {
      title: 'Check-ups & Cleaning',
      text: 'Regular exams and professional cleaning to keep your teeth and gums healthy.',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
    },
    {
      title: 'Theatre Care',
      text: 'Comfortable, professional dental care focused on your oral health, ensuring a healthy smile and a positive experience.',
      icon: 'M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6l1.4 1.4 M17 17l1.4 1.4 M5.6 18.4L7 17 M17 7l1.4-1.4 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    },
    {
      title: 'Fillings & Restorations',
      text: 'Durable, natural-looking treatments that repair damaged teeth.',
      icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    },
    {
      title: 'Braces & Alignment',
      text: 'Straighten your teeth and improve your bite with personalised options.',
      icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01',
    },
    {
      title: 'Children’s Dentistry',
      text: 'A calm, caring environment that helps little ones feel at ease.',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
    },
    {
      title: 'Emergency Care',
      text: 'Toothache or dental injury? Contact us and we will help as soon as we can.',
      icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
    },
  ];
 
  features: Feature[] = [
    {
      title: 'Patient-first approach',
      text: 'We listen, explain every step clearly and never rush your visit.',
    },
    {
      title: 'Comfortable, modern practice',
      text: 'A clean, welcoming space equipped with up-to-date technology.',
    },
    {
      title: 'Simple booking',
      text: 'Request an appointment in under a minute and chat to us directly on WhatsApp.',
    },
  ];
 
  steps: Step[] = [
    { title: 'Fill in the form', text: 'Tell us your name, preferred date and the service you need.' },
    { title: 'Tap Request Booking', text: 'We open WhatsApp with your message already written for you.' },
    { title: 'Confirm with us', text: 'Send the message and we will confirm your appointment with you directly.' },
  ];
 
  // TODO: replace with the practice's real operating hours
  hours: OpeningHour[] = [
    { day: 'Monday – Friday', time: '08:00 – 17:00' },
    { day: 'Saturday', time: '08:00 – 13:00' },
    { day: 'Sunday & Public Holidays', time: 'Emergencies Only' },
  ];

  dentist = {
  name: 'Dr. Mokgadi Mabeso',
  image: 'assets/pic1.jpeg', // change the file name if yours is different
  qualifications: [
    'BDS (Wits)',
    'BHSc Molecular Medicine (Honours) (Wits)',
    'BSc Biochemistry and Human Physiology (Wits)',
  ],
  bio: [
    'Dr. Mokgadi Mabeso obtained her Bachelor of Dental Surgery (BDS) from the University of the Witwatersrand (Wits), graduating cum laude.',
    'Her academic journey also includes a Bachelor of Health Sciences Honours in Molecular Medicine and a Bachelor of Science in Biochemistry and Human Physiology, both from Wits.',
    'Her multidisciplinary academic background provides a strong foundation in biomedical sciences, human physiology and clinical dentistry, complementing her commitment to evidence-based dental practice and comprehensive patient care.',
  ],
};

photos = [
  { src: 'assets/pic1.jpeg', alt: 'Dr. Mokgadi Mabeso' },
  { src: 'assets/pic2.jpeg', alt: 'Dr. Mokgadi Mabeso' },
  { src: 'assets/pic3.jpeg', alt: 'Dr. Mokgadi Mabeso' },
  { src: 'assets/pic4.jpeg', alt: 'Dr. Mokgadi Mabeso' },
  { src: 'assets/pic5.jpeg', alt: 'Dr. Mokgadi Mabeso' },
  { src: 'assets/pic6.jpeg', alt: 'Dr. Mokgadi Mabeso' },
];

current = signal(0);
private timer?: ReturnType<typeof setInterval>;
private touchStartX = 0;

ngOnInit(): void {
  this.startAutoPlay();
}

ngOnDestroy(): void {
  this.stopAutoPlay();
}

startAutoPlay(): void {
  this.stopAutoPlay();
  this.timer = setInterval(() => this.next(), 4000); // 4000 = 4 seconds
}

stopAutoPlay(): void {
  if (this.timer) {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}

next(): void {
  this.current.update((i) => (i + 1) % this.photos.length);
}

prev(): void {
  this.current.update((i) => (i - 1 + this.photos.length) % this.photos.length);
}

goTo(index: number): void {
  this.current.set(index);
  this.startAutoPlay();
}

onTouchStart(event: TouchEvent): void {
  this.touchStartX = event.changedTouches[0].clientX;
}

onTouchEnd(event: TouchEvent): void {
  const distance = event.changedTouches[0].clientX - this.touchStartX;
  if (Math.abs(distance) > 40) {
    distance < 0 ? this.next() : this.prev();
    this.startAutoPlay();
  }
}

}