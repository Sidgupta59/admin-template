import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutComponent } from './app-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { RightBarComponent } from './right-bar/right-bar.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    BodyComponent,
    RightBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    NgbModule,
  ],
})
export class AppLayoutModule { }
