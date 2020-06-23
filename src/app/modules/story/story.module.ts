import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 

/**Modules.*/
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';



@NgModule({
  declarations: [
   StoryComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    StoryRoutingModule,
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
    NguCarouselModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StoryModule {}
