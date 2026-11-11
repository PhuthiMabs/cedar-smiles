import { Routes } from '@angular/router';
import { PublicLayout } from '../layout/public-layout/public-layout';
import { HomePage } from '../components/home-page/home-page';
import { AboutUs } from '../components/about-us/about-us';
import { ContactPage } from '../components/contact-page/contact-page';
import { RequestBooking } from '../components/request-booking/request-booking';
import { ServicesPage } from '../components/services-page/services-page';

export const routes: Routes = [

      {
  path: '',
  component: PublicLayout,
  children: [
    {path:'', component:HomePage},
    {path:'about', component:AboutUs},
    {path:'contact', component:ContactPage},
    {path:'request-booking', component:RequestBooking},
    {path:'services', component:ServicesPage},

  ]
}
];
