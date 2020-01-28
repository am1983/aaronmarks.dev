import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardGalleryComponent
  ]
})
export class SharedModule { }
