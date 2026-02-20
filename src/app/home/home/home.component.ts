import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef>;

  typedText: string = '';
  private texts: string[] = [
    'Angular Developer',
    'Frontend Engineer',
    'Web Enthusiast',
    'Problem Solver'
  ];
  private textIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 100;
  private deletingSpeed: number = 50;
  private pauseTime: number = 2000;
  private typingTimeout: any;

  constructor() {}

  ngOnInit(): void {
    this.startTyping();
  }

  ngAfterViewInit(): void {
    this.setupCounterObserver();
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  private startTyping(): void {
    this.type();
  }

  private type(): void {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.typedText = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typedText = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    if (!this.isDeleting && this.charIndex === currentText.length) {
      this.isDeleting = true;
      this.typingTimeout = setTimeout(() => this.type(), this.pauseTime);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.typingTimeout = setTimeout(() => this.type(), 500);
    } else {
      this.typingTimeout = setTimeout(
        () => this.type(),
        this.isDeleting ? this.deletingSpeed : this.typingSpeed
      );
    }
  }

  private setupCounterObserver(): void {
    const options = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const target = parseInt(element.getAttribute('data-target') || '0');
          this.animateCounter(element, target);
          observer.unobserve(element);
        }
      });
    }, options);

    this.statNumbers.forEach(counter => {
      observer.observe(counter.nativeElement);
    });
  }

  private animateCounter(element: HTMLElement, target: number): void {
    const speed = 200;
    const increment = target / speed;
    let count = 0;

    const updateCounter = () => {
      if (count < target) {
        count = Math.ceil(count + increment);
        element.innerText = count.toString();
        setTimeout(updateCounter, 10);
      } else {
        element.innerText = target + '+';
      }
    };

    updateCounter();
  }
}
