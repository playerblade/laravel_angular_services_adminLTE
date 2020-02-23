import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../core/layout/navbar/navbar.component';
import { SidebarComponent } from '../../core/layout/sidebar/sidebar.component';
import { FooterComponent } from '../../core/layout/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent
  ]
})
export class LayoutModule { }
