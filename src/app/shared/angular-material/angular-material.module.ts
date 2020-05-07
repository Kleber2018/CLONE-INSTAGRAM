import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Navigation.*/
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';


/**Buttons & Indicators.*/
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**Popups & Modals.*/
import { MatDialogModule } from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';


/**Form Controls.*/
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule  } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**Layout.*/
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

/**Data Table.*/
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,

    /**Navigation.*/
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    // MatButtonToggleModule,

    /**Buttons & Indicators.*/
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    /**Popups & Modals.*/
    MatDialogModule,

    /**Form Controls.*/
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,

    /**Layout.*/
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,

    /**Data Table.*/
    MatTableModule
  ],
  exports: [
    /**Navigation.*/
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,

    /**Buttons & Indicators.*/
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    /**Popups & Modals.*/
    MatDialogModule,

    /**Form Controls.*/
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,

    /**Layout.*/
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,

    /**Data Table.*/
    MatTableModule
  ]
})
export class AngularMaterialModule { }
