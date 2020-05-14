
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren, OnDestroy, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCarouselSlideComponent
} from '@ngmodule/material-carousel';
import { fn } from '@angular/compiler/src/output/output_ast';

// document.addEventListener('touchstart', ontouchstart, {passive: true});
// // document.addEventListener('touchstart', handler, {capture: true});


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private static readonly INSTALL_TEXT =
  'npm install @ngmodule/material-carousel';


  @Input() public imgs = [''];


public slidesList = new Array<never>(5);
public showContent = false;

public parentHeight = 'auto';
public timings = '250ms ease-in';
public autoplay = true;
public interval = 5000;
public loop = true;
public hideArrows = false;
public hideIndicators = false;
public color: ThemePalette = 'accent';
public maxWidth = 'auto';
public maintainAspectRatio = true;
public proportion = 25;
public slideHeight = '200px';
// public slides = this.slidesList.length;
public slides: any[];
public overlayColor = '#00000040';
public hideOverlay = false;
public useKeyboard = true;
public useMouseWheel = false;
public orientation = 'ltr';
public log: string[] = [];

@ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
  MatCarouselSlideComponent
>;

constructor() {}

  ngOnInit(): void {
    if(this.imgs){
      if(this.imgs.length > 0){
        this.slides = this.imgs
      }
    }
  }


public resetSlides(): void {
  this.carouselSlides.forEach(item => (item.disabled = false));
}

public onChange(index: number) {
  this.log.push(`MatCarousel#change emitted with index ${index}`);
}


}
