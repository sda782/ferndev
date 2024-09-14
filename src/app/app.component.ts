import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Background } from './background/background';
import { WidgetContainer } from './widgetcontainer/widgetcontainer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Background, WidgetContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { }