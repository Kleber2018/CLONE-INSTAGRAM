import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  @Input() categoria: {categoria: string };

  constructor(
    private location: Location,
    // private produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
    console.log('no feed list', this.categoria)
    
      // this.iniciandoProdutos(this.prodVariacAdc.empresa, this.prodVariacAdc.tipo);
  }

  // public iniciandoProdutos(emp: any, tipo: string): void {
  //   if(tipo == 'produtos'){
  //     this.produtoService.getProdutoByCompanyId(emp.id).pipe(takeUntil(this.end)).subscribe(res => {
  //       this.produtos = res.map(e => {
  //         return {
  //           id: e.payload.doc.id,
  //           url_imagem: e.payload.doc.data().url_imagem,
  //           titulo: e.payload.doc.data().titulo,
  //           descricao: e.payload.doc.data().descricao,
  //           categoria: e.payload.doc.data().categoria,
  //           status: e.payload.doc.data().status,
  //           preco: e.payload.doc.data().preco
  //         };
  //       });
  //       this.produtos.sort((a, b) => (a.categoria < b.categoria) ? -1 : 1);
  //       // this.verificaCategoriasExistentes(this.produtos);
  //     });
  //   } else {

  //   }
  // }

  // para popular o categoriasExistent com as categorias dos produtos/adicionais/variações
  // // que veio do banco para servir de separação no template
  // verificaCategoriasExistentes(prods: any){
  //     prods.forEach(prod => {
  //       for (let index = 0; index <  this.prodVariacAdc.empresa.categorias.length; index++) {
  //         // console.log(this.prodVariacAdc.empresa.categorias[index])
  //         if(this.prodVariacAdc.empresa.categorias[index].id == prod.categoria ){
  //           this.prodVariacAdc.empresa.categorias[index].ordem = '0';
  //         }
  //       }
  //     });
  //   }

  // alterarStatus(id: string, codStatus: string) {
  //   if( this.prodVariacAdc.tipo == 'produtos'){
  //     this.produtoService.updateStatusProduto(codStatus, id);
  //   } else {
  //     this.produtoService.updateStatusOpcional(codStatus, id);
  //   }
  // }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
