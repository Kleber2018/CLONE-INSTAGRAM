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
import { NgxOneSignalModule } from 'ngx-onesignal';
import * as Sentry from "@sentry/browser";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';


/**Configurations.*/
export const options: Partial<IConfig> | (() => Partial<IConfig>) = { };
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgGhostsLoadingModule} from 'ng-ghosts-loading';


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
    NgxOneSignalModule.forRoot({
      appId: "42e5d5f4-7b2a-4f2e-b6e2-ded7139361b5",
      allowLocalhostAsSecureOrigin: true,
      autoRegister: false,
      notifyButton: {
        enabled: true,
      },
    }),
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
    MatSnackBarModule,
    NgxMaskModule.forRoot(options),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('OneSignalSDKWorker.js', {
      enabled: environment.production,
    }),
    DeviceDetectorModule.forRoot(),
    NgGhostsLoadingModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
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
