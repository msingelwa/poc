import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc-boxes',
  templateUrl: './poc-boxes.component.html',
  styleUrls: ['./poc-boxes.component.scss']
})
export class PocBoxesComponent implements OnInit, AfterViewInit {

  aspectRatio: number = 16 / 9;
  cards: any[] = new Array(64).fill({});

  navbarHeight: number = 0; // Set the desired navbar height as a percentage
  containerHeight: number | undefined;
  containerWidth: number | undefined;
  columns: number = 8;
  rows: number = 8;
  boxElements: Element[] = [];
  containerBoxes: Element[] = [];
  orientationMode: string = 'landscape';
  // orientationMode: string = 'portrait';

  @HostListener('window:resize')
  onResize() {
    this.calculateCardSize();
  }

  ngOnInit() {
    this.calculateCardSize();
  }

  ngAfterViewInit(): void {
    this.calculateCardSize();
  }

  calculateCardSize() {
    // const navbarHeight = (window.innerHeight * this.navbarHeight) / 100;
    let windowWidth;
    if (this.orientationMode === 'landscape') {
      windowWidth = window.innerWidth - (this.navbarHeight * this.aspectRatio);
      this.containerHeight = windowWidth / this.aspectRatio;
    } else {
      this.containerHeight = window.innerHeight - this.navbarHeight;
      windowWidth = this.containerHeight / this.aspectRatio;
    }

    const cardSize = this.calculateSize(window.innerWidth, this.containerHeight, this.aspectRatio);

    this.boxElements = Array.from(document.querySelectorAll('.box'));

    this.containerBoxes = Array.from(document.querySelectorAll('.box-container'));

    this.containerBoxes.forEach((box: any) => {
      box.style.width = cardSize.cardWidth + 'px';
      box.style.height = cardSize.cardHeight + 'px';
    });

    this.boxElements.forEach((box: any) => {
      box.style.width = cardSize.cardWidth + 'px';
      box.style.height = cardSize.cardHeight + 'px';
    });

  }

  calculateSize(containerWidth: number, containerHeight: number, aspectRatio: number): { cardWidth: number, cardHeight: number } {
    let cardWidth, cardHeight;

    if (this.orientationMode === 'landscape') {
      containerWidth = containerHeight * aspectRatio;

      if (this.rows >= this.columns) {
        cardHeight = containerHeight / this.rows;
        cardWidth = containerWidth / this.columns;
      }
      else {
        cardWidth = containerWidth / this.columns;
        cardHeight = cardWidth / aspectRatio;
      }
    } else {
      if (this.columns >= this.rows) {
        cardWidth = containerWidth / this.columns;
        cardHeight = cardWidth * this.aspectRatio;
      }
      else {
        cardWidth = containerWidth / this.columns;
        cardHeight = containerHeight / this.rows;
      }
    }

    return { cardWidth, cardHeight };
  }

}
