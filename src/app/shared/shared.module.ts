import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';
import { CalloutComponent } from './callout/callout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardGalleryComponent,
    CalloutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardGalleryComponent,
    CalloutComponent
  ]
})
export class SharedModule { }
