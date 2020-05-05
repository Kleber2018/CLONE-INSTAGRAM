
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from './anuncio.service';
import { Anuncio } from './anuncio.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  iniciandoListaAnuncios(){
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
    console.log('escolhido', categoriaEscolhida);
    this.categoria = categoriaEscolhida;
    console.log(this.categoria);
    // this.router.navigate(['/story', categoriaEscolhida]);
    // this.router.navigate(['/stories', categoriaEscolhida]);
  }


  openThemeMenu() {}

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
