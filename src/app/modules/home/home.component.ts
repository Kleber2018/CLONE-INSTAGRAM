
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from './anuncio.service';
import { Anuncio } from './anuncio.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animaInicCard',[
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
            style({ transform: 'translateX(100%)' }),
            style({ transform: 'scale(0.8)'}),
            style({ transform: 'scale(0.9)'}),
            style({ transform: 'scale(1)'}),
        ]),
      )]),
    ]),
    // trigger('animandoMaisDetalhes', [
    //   state('true', style({
    //     overflow: 'hidden',
    //     height: '*',
    //     width: '300px'
    //   })),
    //   // state('out', style({
    //   //   opacity: '0',
    //   //   overflow: 'hidden',
    //   //   height: '0px',
    //   //   width: '0px'
    //   // })),
    //   transition('* => *', animate('600ms ease-in-out')),
    //   // transition('out => in', animate('400ms ease-in-out'))
    // ])
  ]
})
export class HomeComponent implements OnInit {

  private end: Subject<boolean> = new Subject();

  public categorias = [
    { cod: 'produto', titulo: 'PRODUTOS'},
    { cod: 'servico', titulo: 'SERVIÇOS'},
    { cod: 'comida', titulo: 'COMIDAS'},
    // { cod: 'story', titulo: 'STORYS'}
  ];
  public categoria = 'produto'
  public anuncios: Anuncio[]

 
  constructor(
    private anuncioService: AnuncioService,
    private router: Router,
    
    ) { window.scrollTo( 0, 0 );
      this.iniciandoListaAnuncios(this.categoria)
    }

  ngOnInit() { }
  //Buscando no BD, aindá não adicionei o filtro de categoria
  iniciandoListaAnuncios(categoria?: string){

    if(categoria == 'story'){
      this.router.navigate(['/story', 'teste']);
    } else {
      this.anuncioService.getAnunciosWhere(categoria).pipe(takeUntil(this.end)).subscribe(res => {
        this.anuncios = res.map(e => {
          return {
            uid: e.uid,
            usuario: e.usuario,
            companyInformation: e.companyInformation,
            conteudo: e.conteudo,
            itens: e.itens,
            status: e.status,
            createdAt: e.status,
            indexImg: 0,
            ocultardetalhes: false
          };
        });
        this.anuncios.sort((a, b) => (a.createdAt.seconds < b.createdAt.seconds) ? -1 : 1);
      });
    }

  }

  
  // escolhendoCategoria(categoriaEscolhida: any){
  //   this.iniciandoListaAnuncios(categoriaEscolhida)
  //   // console.log('escolhido', categoriaEscolhida);
  //   // this.categoria = categoriaEscolhida;
  //   // console.log(this.categoria);
  //   // this.router.navigate(['/story', categoriaEscolhida]);
  //   // this.router.navigate(['/stories', categoriaEscolhida]);
  // }

  // para correr as imagens do anuncio
  // proximaImagemAnuncio(anuncio: any){
  //   var indexAnuncio = this.anuncios.indexOf(anuncio)
  //   if(this.anuncios[indexAnuncio].conteudo.img.length >= (this.anuncios[indexAnuncio].indexImg+2)){
  //     this.anuncios[indexAnuncio].indexImg = this.anuncios[indexAnuncio].indexImg + 1;
  //   } else {
  //     this.anuncios[indexAnuncio].indexImg = 0;
  //   }
  // }

  // animaMaisDetalhes(): void {
  //   console.log(this.variavelAnimaMaisDetalhes)
  //   this.variavelAnimaMaisDetalhes = this.variavelAnimaMaisDetalhes === false ? true : false;
  //   console.log(this.variavelAnimaMaisDetalhes)
  // }

  

  openThemeMenu() {}

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
