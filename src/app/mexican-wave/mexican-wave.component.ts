import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mexican-wave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mexican-wave.component.html',
  styleUrl: './mexican-wave.component.scss',
})
export class MexicanWaveComponent implements OnInit {
  ngOnInit(): void {}

  text: string = 'Mexican';
  textArray: string[] = this.text.split('');

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async startWave(div: HTMLElement) {
    div.childNodes.forEach((span, index) => {
      let spanelement = span as HTMLSpanElement;
      setTimeout(() => {
        spanelement.style.transition = 'all 0.5s';
        spanelement.style.color = 'red';
        spanelement.style.transform = 'translateY(-100px)';
      }, index * 100);
    });

    await this.delay(200);

    div.childNodes.forEach((span, index) => {
      let spanelement = span as HTMLSpanElement;
      setTimeout(() => {
        spanelement.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
}
