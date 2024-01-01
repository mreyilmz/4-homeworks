import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MexicanWaveComponent } from './mexican-wave/mexican-wave.component';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { BasketComponent } from './basket/basket.component';
import { DoorComponent } from './door/door.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MexicanWaveComponent,
    TextAnimationComponent,
    BasketComponent,
    DoorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'im-a-youtuber';
}
