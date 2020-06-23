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
    grid: { xs: 5, sm: 8, md: 10, lg: 14, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2,
    point: { visible: false,  hideOnSingleSlide: false }	
  };

  public stories = [
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/PoyzstGt3XVqX6yfHFHY%2F1590109204843?alt=media&token=09dcfd1a-df45-4696-b02f-c98af1a7eb39',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/192x192.png?alt=media&token=02d48530-9b5f-4446-bbfa-88b796db5cd1',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/512x512.png?alt=media&token=38c33209-daf0-47d8-8673-ce164303c276',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/categorias-generica-bairrofeliz.jpg?alt=media&token=f82f09f4-488c-4437-bd6c-5b10ef93a2de',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/PoyzstGt3XVqX6yfHFHY%2F1590109204843?alt=media&token=09dcfd1a-df45-4696-b02f-c98af1a7eb39',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/192x192.png?alt=media&token=02d48530-9b5f-4446-bbfa-88b796db5cd1',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/512x512.png?alt=media&token=38c33209-daf0-47d8-8673-ce164303c276',
    'https://firebasestorage.googleapis.com/v0/b/bairrofeliz103.appspot.com/o/categorias-generica-bairrofeliz.jpg?alt=media&token=f82f09f4-488c-4437-bd6c-5b10ef93a2de'
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
