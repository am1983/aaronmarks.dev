import { Injectable } from '@angular/core';
import * as Prismic from 'prismic-javascript';
import { CONFIG } from '../prismic-configuration';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  constructor() { }

  test() {
    return Prismic.getApi(CONFIG.apiEndpoint, {})
      .then((api: any) => {
        return api.query(
          Prismic.Predicates.at('document.type', 'post'),
          { orderings : '[post.first_publication_date] DESC' });
        })
      .then((response: any) => {
        return response.results;
      }, (err: any) => {
        console.log('Something went wrong: ', err);
      });
  }
}
