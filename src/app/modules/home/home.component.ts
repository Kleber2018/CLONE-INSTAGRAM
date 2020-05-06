
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from './anuncio.service';
import { Anuncio } from './anuncio.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

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
  ]
})
export class HomeComponent implements OnInit {

  private end: Subject<boolean> = new Subject();

  public categorias = ['LANCHONETE', 'LOJA', 'PRESENTE', 'OUTROS'];
  public categoria = 'Presente'
  public anuncios: Anuncio[]
 
  constructor(
    private anuncioService: AnuncioService,
    private router: Router
    ) { window.scrollTo( 0, 0 );
      this.iniciandoListaAnuncios()}


  ngOnInit() { }

  iniciandoListaAnuncios(categoria?: string){
      this.anuncioService.getAnuncios().pipe(takeUntil(this.end)).subscribe(res => {
        this.anuncios = res.map(e => {
          return {
            uid: e.payload.doc.id,
            usuario: e.payload.doc.data().usuario,
            empresaNome: e.payload.doc.data().empresaNome,
            categoria: e.payload.doc.data().categoria,
            ordem: e.payload.doc.data().ordem,
            funcionamento: e.payload.doc.data().funcionamento,
            anuncio: e.payload.doc.data().anuncio,
            itens: e.payload.doc.data().itens,
            status: e.payload.doc.data().status,
            createdAt: e.payload.doc.data().status,
            indexImg: 0
          };
        });
        this.anuncios.sort((a, b) => (a.categoria < b.categoria) ? -1 : 1);
        console.log(this.anuncios);
      });
  }

  iniciandoListaAnunciosCat(categoriaLocal: string){
    this.anuncioService.getAnuncios().pipe(takeUntil(this.end)).subscribe(res => {
      this.anuncios = res.map(e => {
        return {
          uid: e.payload.doc.id,
          usuario: e.payload.doc.data().usuario,
          empresaNome: e.payload.doc.data().empresaNome,
          categoria: e.payload.doc.data().categoria,
          ordem: e.payload.doc.data().ordem,
          funcionamento: e.payload.doc.data().funcionamento,
          anuncio: e.payload.doc.data().anuncio,
          itens: e.payload.doc.data().itens,
          status: e.payload.doc.data().status,
          createdAt: e.payload.doc.data().status,
        };
      });
      this.anuncios.sort((a, b) => (a.categoria < b.categoria) ? -1 : 1);
      console.log(this.anuncios);
    });
}


  escolhendoCategoria(categoriaEscolhida: any){
    this.iniciandoListaAnuncios(categoriaEscolhida)
    console.log('escolhido', categoriaEscolhida);
    this.categoria = categoriaEscolhida;
    console.log(this.categoria);
    // this.router.navigate(['/story', categoriaEscolhida]);
    // this.router.navigate(['/stories', categoriaEscolhida]);
  }

  // para correr as imagens do anuncio
  proximaImagemAnuncio(anuncio: any){
    var indexAnuncio = this.anuncios.indexOf(anuncio)
    if(this.anuncios[indexAnuncio].anuncio.img.length >= (this.anuncios[indexAnuncio].indexImg+2)){
      this.anuncios[indexAnuncio].indexImg = this.anuncios[indexAnuncio].indexImg + 1;
    } else {
      this.anuncios[indexAnuncio].indexImg = 0;
    }
  }

  escolhendoAnuncio(link: string){
    window.open(link, "_blank");
      // this.router.navigate(['http://api.whatsapp.com/send?1=pt_BR&phone=5542988572209&text=Olá%20me%20interessei%20pela%20camiseta%20do%20Shopping%20Veneza']);
  }

  openThemeMenu() {}

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
