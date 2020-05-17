import { OverlayContainer } from '@angular/cdk/overlay';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatSliderModule, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';
import * as Sentry from "@sentry/browser";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';

/**Configurations.*/
export const options: Partial<IConfig> | (() => Partial<IConfig>) = { };
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgGhostsLoadingModule} from 'ng-ghosts-loading';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'primeng/carousel/primeng-carousel';

import { NguCarouselModule } from '@ngu/carousel';


Sentry.init({
  dsn: "https://71fdd8234c5046349be0f7c21d40ad08@sentry.io/4294967"
});

// @Injectable()
// export class SentryErrorHandler implements ErrorHandler {
//   constructor() {}
//   handleError(error) {
//     console.log('teste', error)
//     const eventId = Sentry.captureException(error.originalError || error);
//    // Sentry.showReportDialog({ eventId });
//   }
// }
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule, // This is a weird but for hammerjs I think
    AngularFireModule.initializeApp(environment.firebase), // This sets our key to initialize firebase
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireAnalyticsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(options),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DeviceDetectorModule.forRoot(),
    NgGhostsLoadingModule,
    MatCarouselModule.forRoot(),
    // NguCarouselModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    ScreenTrackingService
    // { provide: ORIGIN, useValue: 'https://us-central1-delivery-dash-teste3.cloudfunctions.net' }
    // { provide: ErrorHandler, useClass: SentryErrorHandler }
  ], // https://github.com/angular/angularfire2/issues/1993
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer
      .getContainerElement()
      .classList.add('angular-material-router-app-theme');
  }
}
