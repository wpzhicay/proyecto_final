import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // ✅ correcto


const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

bootstrap();

