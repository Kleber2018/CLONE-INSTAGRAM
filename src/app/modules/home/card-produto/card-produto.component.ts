
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren, OnDestroy, Input, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  @Input() public anuncio = [''];

  constructor() {}

  ngOnInit(): void { 
    console.log('componente', this.anuncio);
  }
}
