import {
  Component,
  ElementRef,
  AfterViewInit,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  templateUrl: 'jg.component.html',
  styleUrls: ['./jg.component.scss']
})
export class JGComponent implements AfterViewInit {
  @ViewChildren('jgContent') sseContentElements!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      {
        threshold: 0.3, // Adjust the threshold as needed
      }
    );

    if (this.sseContentElements) {
      this.sseContentElements.forEach((element) => {
        observer.observe(element.nativeElement);
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.sseContentElements) {
      this.sseContentElements.forEach((element) => {
        const rect = element.nativeElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          element.nativeElement.classList.add('fade-in');
        } else {
          element.nativeElement.classList.remove('fade-in');
        }
      });
    }
  }
  aboutJG = `Jötunn's Greed is a fast-paced extraction-looter where you raid villages and grow your clan with the loot you acquire. Build up enough power to take on the giant that wronged your people!`;
  ultimate = `Take one of five available abilities into your raids, giving you the power of the gods you worship`;
}
