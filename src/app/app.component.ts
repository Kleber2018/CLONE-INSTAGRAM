import { Component, OnInit } from '@angular/core';

import { ColorPickerService } from './core/services/color-picker.service';
import { OneSignalService } from 'ngx-onesignal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private colorPicker: ColorPickerService,
    public readonly onesignal: OneSignalService
    ) {
    this.themeClass = this.colorPicker.getColorClass();
  }

  themeClass;
  title = 'angular-material-router-outlet';
  ngOnInit(): void {
    //  console.log('color inicializado', this.themeClass)
    };


}
