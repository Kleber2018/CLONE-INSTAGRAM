
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren, OnDestroy, ChangeDetectionStrategy, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCarouselSlideComponent
} from '@ngmodule/material-carousel';
import { fn } from '@angular/compiler/src/output/output_ast';


import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

// document.addEventListener('touchstart', ontouchstart, {passive: true});
// // document.addEventListener('touchstart', handler, {capture: true});


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  @Input() public imgs = [''];


public slidesList = new Array<never>(5);
public slides: any[];


// @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
//   MatCarouselSlideComponent
// >;
// @ViewChildren('myCarousel') myCarousel: NguCarousel;

public carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
  load: 3,
  interval: {timing: 4000, initialDelay: 1000},
  loop: false,
  touch: true,
  velocity: 0.2
};


constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(this.imgs){
      if(this.imgs.length > 0){
        this.slides = this.imgs
      }
    }

  }



  ngAfterViewInit() {
    this.cdr.detectChanges();
  }


}
