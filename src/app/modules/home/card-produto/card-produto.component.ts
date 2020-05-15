
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren, OnDestroy, Input, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Anuncio } from '../anuncio.model';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  @Input() public anuncio: Anuncio;
  public variavelAnimaMaisDetalhes = true;
  constructor() {}

  ngOnInit(): void { 
    console.log('componente', this.anuncio);
  }


  escolhendoAnuncioWhatsApp(whatsApp: string, produto: string){
    // terminar de desenvolver o gerador de link whatsApp
    var txtPadrao = "Olá, estou interessado por "+produto+" do Shopping Jd Veneza";
    var txtPadraoExplodido = txtPadrao.split(" ");
    
    var link = 'http://api.whatsapp.com/send?1=pt_BR&phone=55'+whatsApp+'&text='+txtPadraoExplodido.join('%20')
    window.open(link, "_blank");
      // this.router.navigate(['http://api.whatsapp.com/send?1=pt_BR&phone=5542988572209&text=Olá%20me%20interessei%20pela%20camiseta%20do%20Shopping%20Veneza']);
  }
}
