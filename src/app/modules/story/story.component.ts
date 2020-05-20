
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import {WcStories} from 
// import {*} from '@gugadev/wc-stories'
// import * as wc-stories from '@gugadev';
import '@gugadev/wc-stories';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import '@webcomponents/custom-elements/custom-elements.min';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('btnWhatsApp',[
      transition('* => *', [
        animate('2s', 
          keyframes([
            style({ transform: 'scale(1.1)' }),
            style({ transform: 'scale(1.2)'}),
            style({ backgroundColor: 'orange', transform: 'scale(1.4)'}),
            style({ backgroundColor: 'red', transform: 'scale(1.5)' }),
            style({ backgroundColor: 'orange', transform: 'scale(1.4)'}),
            style({ transform: 'scale(1.3)' }),
            style({ transform: 'scale(1.2)' }),
            style({ transform: 'scale(1.1)' }),
            style({ transform: 'scale(1)' })
        ]),
      )]),
    ]),
    trigger('animaTroca',[
      // state('iniciando', style({
      //   transform: 'scale(1)'
      // })),
      // state('finalizado', style({
      //   transform: 'scale(1)'
      // })),
      // exemplo: this.pedindo = this.pedindo === 'finalizado' ? 'iniciando' : 'finalizado';
      // transition('* => *', [
      //   animate('0.6s', 
      //     keyframes([
      //       style({ transform: 'scale(0.3)' }),
      //       style({ transform: 'scale(0.7)'}),
      //       style({ transform: 'scale(1)'}),
      //   ]),
      // )]),
      // transition('* => *', [
      //   animate('0.6s', 
      //     keyframes([
      //       style({ transform: 'translateX(100%)' }),
      //   ]),
      // )]),

      // transition('* => *', [
      //   animate('0.6s', 
      //     keyframes([
      //       style({ transform: 'translateX(100%)' }),
      //   ]),
      // )]),

      transition('* => *', [
        animate('0.6s', 
          keyframes([
            style({ transform: 'scale(0.3)' }),
            style({ transform: 'scale(0.7)'}),
            style({ transform: 'scale(1)'}),
        ]),
      )]),

    ]),
  ]
})
export class StoryComponent implements OnInit {

  public categoria: string;
  public imgAnuncio: string;
  // public stories = [
  //   'https://i.imgur.com/AY5z4ZP.jpg',
  //   'https://i.imgur.com/HJBbtOI.jpg',
  //   'https://i.imgur.com/tXgQukC.jpg',
  //   'https://i.imgur.com/A7BMaSe.jpg'
  // ]


  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2,
    point: { visible: true,  hideOnSingleSlide: true }	
  };

  public stories = [
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fcapa.jpg?alt=media&token=3db69eb4-03e0-4435-891b-16b2dfccbe1a',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fbolocapa.jpg?alt=media&token=41d768fb-ab9e-435d-bb17-a5aa4554c2ed',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fbolo1.jpg?alt=media&token=6116f512-03dd-417f-b547-20ee6260f12d',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fdocinhoscapa.jpg?alt=media&token=39754100-8b75-47f7-8d96-76ce4613639e',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fdocinhos1.jpg?alt=media&token=20a35220-6844-408b-85c6-5ce58840ebcd',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fcapa.jpg?alt=media&token=3db69eb4-03e0-4435-891b-16b2dfccbe1a',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fbolocapa.jpg?alt=media&token=41d768fb-ab9e-435d-bb17-a5aa4554c2ed',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fbolo1.jpg?alt=media&token=6116f512-03dd-417f-b547-20ee6260f12d',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fdocinhoscapa.jpg?alt=media&token=39754100-8b75-47f7-8d96-76ce4613639e'

  ]  





  // public stories = [
  //   '../../../assets/veneza/capa.jpg',
  //   '../../../assets/veneza/bolocapa.jpg',
  //   '../../../assets/veneza/bolo1.jpg',
  //   '../../../assets/veneza/docinhoscapa.jpg',
  //   '../../../assets/veneza/docinhos1.jpg',
  //   '../../../assets/veneza/finalcapa.jpg'
  // ]
  public indexAnuncio: number;
  public whatsApp = 'http://api.whatsapp.com/send?1=pt_BR&phone=5542988572209&text=Olá%20me%20interessei%20pela%20camiseta%20do%20Shopping%20Veneza';

  constructor(  private router: Router,
                private activatedRoute: ActivatedRoute) {
                window.scrollTo( 0, 0 );
                this.indexAnuncio = 0
                this.imgAnuncio = this.stories[this.indexAnuncio]
              }

  ngOnInit() { 
    this.categoria = this.activatedRoute.snapshot.params.categoria;
    console.log(this.categoria);
  }

  // proximoAnuncio(){

  //   if(this.stories.length <= (this.indexAnuncio+1)){
  //     console.log('dentro');
  //     this.indexAnuncio = 0;
  //     this.imgAnuncio = this.stories[this.indexAnuncio]
  //   } else {
  //     this.indexAnuncio = this.indexAnuncio + 1;
  //     this.imgAnuncio = this.stories[this.indexAnuncio]
  //   }
  // }

  escolhendoAnuncio(){
    window.open(this.whatsApp, "_blank");

      // this.router.navigate(['http://api.whatsapp.com/send?1=pt_BR&phone=5542988572209&text=Olá%20me%20interessei%20pela%20camiseta%20do%20Shopping%20Veneza']);
  }


 
}
