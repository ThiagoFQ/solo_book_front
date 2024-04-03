import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dice-20',
  standalone: true,
  imports: [],
  templateUrl: './dice-20.component.html',
  styleUrl: './dice-20.component.scss'
})
export class Dice20Component {
  @ViewChild('die') dieElement: ElementRef | undefined;
  @ViewChild('links') linksElement: ElementRef | undefined;

  constructor(private elementRef: ElementRef) {}

  sides = 20;
  initialSide = 1;
  lastFace: number | undefined;
  timeoutId: any;
  transitionDuration = 500;
  animationDuration = 3000;

  ngOnInit() {
    this.lastFace = this.initialSide;
    if (this.linksElement) {
      const links = this.linksElement.nativeElement.querySelectorAll('ul > li > a');
      links.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', () => {
          this.reset();
          const href = link.getAttribute('href');
          if (href) {
            this.rollTo(href);
          }
          return false;
        });
      });
    }

    const randomize = this.dieElement?.nativeElement.querySelector('.randomize');
if (randomize) {
  randomize.addEventListener('click', () => {
    this.dieElement?.nativeElement.classList.add('rolling');
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.dieElement?.nativeElement.classList.remove('rolling');
      this.rollTo(this.randomFace().toString());
    }, this.animationDuration);

    return false;
  });
}
  }

  randomFace(): number {
    let face = Math.floor((Math.random() * this.sides)) + this.initialSide;
    this.lastFace = face === this.lastFace ? this.randomFace() : face;
    return face;
  }

  rollTo(face: string) {
    clearTimeout(this.timeoutId);
    if (this.linksElement) {
      const links = this.linksElement.nativeElement.querySelectorAll('ul > li > a');
      links.forEach((link: HTMLAnchorElement) => {
        link.classList.remove('active');
      });
      const activeLink = this.linksElement.nativeElement.querySelector(`[href='${face}']`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }

  reset() {
    if (this.dieElement) {
      this.dieElement.nativeElement.setAttribute('data-face', null);
      this.dieElement.nativeElement.classList.remove('rolling');
    }
  }
}
