import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceItemComponent } from './home/service-item/service.item.component';
import { InfobarComponent } from './infobar/infobar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeCardComponent } from './resume/resume-card/resume.card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecommendationItemComponent } from './home/recommendation-item/recommendation.item.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MaterialModule } from './modules/material.module';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery.item.component';
import { ImageGalleryDialogComponent } from './shared/image-gallery-dialog/image.gallery.dialog.component';
import { LightboxModule } from 'ngx-lightbox';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project.item.component';
import { ProjectDetailComponent } from './project-detail/project.detail.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { RecommendationPopupComponent } from './resume/recommendation-popup/recommendation.popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    ServiceItemComponent,
    RecommendationItemComponent,
    InfobarComponent,
    ResumeComponent,
    ResumeCardComponent,
    ContactComponent,
    GalleryComponent,
    GalleryItemComponent,
    ImageGalleryDialogComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    StatisticsComponent,
    RecommendationPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      titleColor: '#fff',
      innerStrokeWidth: 8,
      outerStrokeColor: "#ffc107",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    LightboxModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
