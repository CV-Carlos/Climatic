import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { WelcomeAndSearchComponent } from './app/features/welcomeAndSearch/welcome-and-search/welcome-and-search.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
