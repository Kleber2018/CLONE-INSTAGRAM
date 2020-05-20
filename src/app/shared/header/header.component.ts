import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

import { Anuncio } from './../../modules/home/anuncio.model'
import { NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  public empresas: [
    {
      empresaNome: string,
      empresaImg: string
      anuncios: Anuncio[],
    }
  ]


  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 4, sm: 6, md: 8, lg: 10, all: 0 },
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
  @Input() public anuncios: Anuncio[];

  constructor( private router: Router ) {}


  ngOnInit(): void {
    console.log('header antes', this.anuncios);

    this.anuncios.sort((a, b) => (a.companyInformation.uid < b.companyInformation.uid) ? -1 : 1);

    console.log('header depois', this.anuncios);

    //criando variavel para imagens
    this.anuncios.forEach(anuncio => {
      if(this.empresas){
        var naoEncontrado = true
        for (const i in this.empresas) {
          if (this.empresas[i].empresaNome == anuncio.companyInformation.empresaNome) {
            this.empresas[i].anuncios.push(anuncio);
            naoEncontrado = false            
          }
        }
        if(naoEncontrado){
          this.empresas.push({
            empresaNome: anuncio.companyInformation.empresaNome,
            empresaImg: "../../../assets/WhatsApp.png",
            anuncios: [anuncio],
          })
        }
      } else {
        this.empresas = [{
          empresaNome: anuncio.companyInformation.empresaNome,
          empresaImg: "../../../assets/WhatsApp.png",
          anuncios: [anuncio],
        }]
      }
    });

    console.log(this.empresas);

   }

   selecionandoImg(anuncio){
     console.log(anuncio)
   }

   clicandoStory(item: any){
     console.log(item)
    this.router.navigate(['/story', 'teste']);
   }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
