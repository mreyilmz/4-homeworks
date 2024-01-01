import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-animation',
  standalone: true,
  imports: [],
  templateUrl: './text-animation.component.html',
  styleUrl: './text-animation.component.scss',
})
export class TextAnimationComponent {
  firstText: string = "I'm a ";
  mainText: string = 'Youtuber';
  youtubeText: string = 'Youtuber';
  bloggerText: string = 'Blogger';
  freelancerText: string = 'Freelancer';

  count: number = 0;

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async removeText() {
    while (this.mainText.length > 0) {
      this.mainText = this.mainText.slice(0, -1);
      await this.delay(250);
    }

    this.count += 1;

    if (this.count % 3 === 1) {
      await this.addText(this.bloggerText);
    } else if (this.count % 3 === 2) {
      await this.addText(this.freelancerText);
    } else {
      await this.addText(this.youtubeText);
    }
  }

  async addText(text: string) {
    for (const char of text) {
      this.mainText += char;
      await this.delay(250);
    }

    // Wait for a moment after adding text before continuing
    await this.delay(250);
    await this.removeText();
  }
}
