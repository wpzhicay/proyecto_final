import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config';

const bootstrap = () => bootstrapApplication(AppComponent, config);

bootstrap();
