import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LoaderSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    LoaderSpinnerComponent
  ]
})
export class SharedModule { }
