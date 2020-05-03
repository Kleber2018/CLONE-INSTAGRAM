import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();
  public data: any
  constructor() {
    var dataAgora = new Date();
    this.data = dataAgora.getDate()+'/'+dataAgora.getMonth()+'/'+dataAgora.getFullYear();
   }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }
}
