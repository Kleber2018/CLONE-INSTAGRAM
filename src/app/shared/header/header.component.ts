import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { Anuncio } from './../../modules/home/anuncio.model'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  public responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 9,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 4,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
    }
  ];

  public stories = [
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fcapa.jpg?alt=media&token=3db69eb4-03e0-4435-891b-16b2dfccbe1a',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fbolocapa.jpg?alt=media&token=41d768fb-ab9e-435d-bb17-a5aa4554c2ed',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fbolo1.jpg?alt=media&token=6116f512-03dd-417f-b547-20ee6260f12d',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fdocinhoscapa.jpg?alt=media&token=39754100-8b75-47f7-8d96-76ce4613639e',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/produtos%2Fdocinhos1.jpg?alt=media&token=20a35220-6844-408b-85c6-5ce58840ebcd'

  ] 
  @Input() public anuncios: Anuncio[];

  constructor( ) {}


  ngOnInit(): void {
    console.log('header', this.anuncios);
   }
   selecionandoImg(anuncio){
     console.log(anuncio)
   }
  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
