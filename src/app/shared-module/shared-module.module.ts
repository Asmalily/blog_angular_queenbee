import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostComponent } from './blogpost/blogpost.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    BlogpostComponent
  ],
  imports: [
    CommonModule,MatChipsModule
  ]
})
export class SharedModuleModule { }
