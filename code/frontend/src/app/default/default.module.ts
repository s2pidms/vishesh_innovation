import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SideNavHoverDirective } from '@directives/sideNavhover.directive';
import { NavHeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DefaultComponent,
    SidebarComponent,
    NavHeaderComponent,
    SideNavHoverDirective,
  ],
  imports: [CommonModule, DefaultRoutingModule],
})
export class DefaultModule {}
