import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent
  ],
  exports: [
    SidebarComponent,
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
