import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

/**Angular Material. */
import { MatSidenav } from '@angular/material/sidenav';
import { ColorPickerService } from 'src/app/core/services/color-picker.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private end: Subject<boolean> = new Subject();


  constructor(
    private router: Router,
    private colorPicker: ColorPickerService,
  ) { }

  ngOnInit(): void { }

  openThemeMenu() {}
  pickColor(color: string) {
    let colorTheme = '';
    if (color !== '') {
      colorTheme = `-${color}`;
    }
    this.colorPicker.setColorClass(
      `angular-material-router-app-theme${colorTheme}`
    );
  }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }

  // public goTo(sidenavItem: SidenavItem, sidenav: MatSidenav): void {
  //   sidenav.close();
  //   this.router.navigate([sidenavItem.route]);
  // }

  // public logout(sidenav: MatSidenav): void {
  //   sidenav.close();
  //   this.authenticationService.logout();
  // }
}
