import {
  Component,
  ElementRef,
  AfterViewInit,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'sse.component.html',
  styleUrls: ['./sse.component.scss']
})
export class SSEComponent implements AfterViewInit {
  @ViewChildren('sseContent') sseContentElements!: QueryList<ElementRef>;
  ytUrl : string = "https://www.youtube-nocookie.com/embed/OLe2mpiMvc0?si=jpv4mfK2AlWBuwGx";
  ytTitle : string = "Shopping Spree: Extreme!!! Gameplay Trailer";

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
  aboutSSE = `Dive into the hilarious world of <a href="https://store.steampowered.com/app/2124300/Shopping_Spree_Extreme/">'Shopping Spree: Extreme!!!'</a> where your shopping list is your quest, and the aisles are your battlegrounds!`;
  goalSSE = `It\’s every shopper for themselves! Shove past NPCs and players alike to grab those items off your list and get to the checkout without breaking your budget!`;
  levelsSSE = `In the world of 'Shopping Spree: Extreme!!!', nowhere  is safe from plopping a marketplace down, including the top of a construction site! Comb through 7 hand-crafted levels and over 100 different items to grab!`;
  multiSSE = `Choose from 3 multiplayer modes! <p>Fill your group cart and manage your budget as a team.</p> <p>Race against other players to the checkout</p> <p>Play as an item and try to trick the other player into collecting you!</p>`;
  // ... Your other component code (aboutSSE, goalSSE, levelsSSE, multiSSE) remains the same
}
