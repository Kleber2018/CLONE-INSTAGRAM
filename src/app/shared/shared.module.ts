import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**Angular Material.*/
import { AngularMaterialModule } from './angular-material/angular-material.module';

/**Third party modules.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**Modules.*/
// import { ButtonModule } from './button/button.module';

/**Components.*/
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { MatButtonToggleModule } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
// import { WcStories } from '@gugadev/wc-stories'


@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    NgxMaskModule
    // ButtonModule
  ],
  exports: [
    AngularMaterialModule,
    FlexLayoutModule,
    // ButtonModule,
    FooterComponent,
    LayoutComponent,
  ],
  entryComponents: [
    AlertDialogComponent
  ],
})
export class SharedModule { }
