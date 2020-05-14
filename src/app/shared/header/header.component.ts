import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();

  @Input() public categorias = '';

  constructor( ) {}

  ngOnInit(): void {

   }
   
  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
