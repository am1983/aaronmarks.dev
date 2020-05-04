import { Component, OnInit } from '@angular/core';
import PrismicDOM from 'prismic-dom';
import { PrismicService } from '../prismic.service';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  posts!: void | Object[];
  isBusy = false;
  PrismicDOM = PrismicDOM;

  constructor(private prismicService: PrismicService) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(): void {
    this.isBusy = true;

    this.prismicService.test().then((posts: any) => {
      this.posts = posts;
      this.isBusy = false;
    });
  }

  htmlSerializer(type: any, element: any, content: any, children: any) {
    const Elements = PrismicDOM.RichText.Elements;
    switch (type) {
      // Add a class to paragraph elements
      case Elements.paragraph:
        if (children[0].length > 0) {
          // Paragraph isn't empty... so it isn't a line break.
          return '<p class="py-4">' + children.join('') + '</p>';
        }
        return null;
      // Don't wrap images in a <p> tag
      default:
        return null;
    }
  }
}
