// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter }         from '@angular/router';
import { App }         from './app/app.component';
import { routes }               from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));
