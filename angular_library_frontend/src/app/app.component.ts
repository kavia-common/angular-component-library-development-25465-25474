import { Component } from '@angular/core';
import { AppToolbarComponent } from '../../projects/ocean-ui/src/lib/app-toolbar/app-toolbar.component';
import { AppButtonComponent } from '../../projects/ocean-ui/src/lib/app-button/app-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppToolbarComponent, AppButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, angular';
}
