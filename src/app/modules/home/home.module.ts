import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatBadgeModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {CarouselModule} from 'primeng/carousel';


/**Modules.*/
import { SharedModule } from 'src/app/shared/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CardProdutoComponent } from './card-produto/card-produto.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    MatBadgeModule,
    MatCarouselModule.forRoot(),
    CarouselModule
  ],
  exports: [
    CarouselComponent,
    CardProdutoComponent
  ]
})
export class HomeModule {}
