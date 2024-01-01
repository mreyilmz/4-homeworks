import { Component } from '@angular/core';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss',
})
export class DoorComponent {
  toggle(door: HTMLElement, buton: HTMLButtonElement) {
    door.classList.toggle('open');
    if (door.classList.contains('open')) {
      let opening = new Audio('../../assets/dorm-door-opening-6038.mp3');
      opening.play();
      buton.textContent = 'Kapa';
    } else {
      let closing = new Audio('../../assets/car-door-close-6929.mp3');
      closing.play();
      buton.textContent = 'Aç';
    }
  }
}
