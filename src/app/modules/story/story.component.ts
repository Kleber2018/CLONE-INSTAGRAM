
import { Component, OnInit, OnDestroy } from '@angular/core';




import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public categoria: string;

  constructor(  private router: Router,
                private activatedRoute: ActivatedRoute) {
                window.scrollTo( 0, 0 );
              }

  ngOnInit() { 
    this.categoria = this.activatedRoute.snapshot.params.categoria;
    console.log(this.categoria);
  }
 
}
