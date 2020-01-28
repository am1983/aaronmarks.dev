import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from './card-content';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.scss']
})
export class CardGalleryComponent implements OnInit {
  @Input() cards: CardContent[] = [];

  constructor() { }

  ngOnInit() {
  }

}
