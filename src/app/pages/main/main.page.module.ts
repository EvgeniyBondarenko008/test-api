import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'src/app/core/components/button/button.component';
import { MainPage } from './main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: MainPage }])
  ],
  declarations: [MainPage, ButtonComponent]
})
export class MainPageModule { }
