
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categorias = ['LANCHONETE', 'LOJA', 'PRESENTE', 'OUTROS'];
 
  constructor(
    private router: Router
    ) { window.scrollTo( 0, 0 );}


  ngOnInit() { }


  escolhendoCategoria(categoriaEscolhida: any){
    console.log('escolhido', categoriaEscolhida);
    this.router.navigate(['/story', categoriaEscolhida]);
    // this.router.navigate(['/stories', categoriaEscolhida]);
  }


  openThemeMenu() {}

}
