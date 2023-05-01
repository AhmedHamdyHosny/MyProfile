import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';
import { GalleryComponent } from '../gallery/gallery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
