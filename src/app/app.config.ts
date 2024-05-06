import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(
        {
          "projectId": "ngfb-standalone-test",
          "appId": "1:27980000987:web:304d33edb12c47a69566fe",
          "storageBucket": "ngfb-standalone-test.appspot.com",
          // "locationId": "europe-west",
          "apiKey": "AIzaSyDYsCp354jYXezPTb4-AvU6YC0OuXGK4Hw",
          "authDomain": "ngfb-standalone-test.firebaseapp.com",
          "messagingSenderId": "27980000987"
        }
      ))
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideStorage(() => getStorage()))
  ]
};
