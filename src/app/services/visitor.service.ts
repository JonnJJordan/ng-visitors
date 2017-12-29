import { Injectable } from '@angular/core';
import { Visitor } from '../models/Visitor';

/* Service to handle visitor info */
@Injectable()
export class VisitorService {

  constructor() {}

  /* Add new visitor */
  add(v: Visitor) {
    /* Check if there are visitors already and save the new one */
    if (JSON.parse(sessionStorage.getItem('visitors')) !== null) {
      let visitors = JSON.parse(sessionStorage.getItem('visitors'));
      visitors.push(v);
      sessionStorage.setItem('visitors', JSON.stringify(visitors));
    } else { /* else save the first one */
      let visitors = [];
      visitors.push(v);
      sessionStorage.setItem('visitors', JSON.stringify(visitors));
    }

  }

  /* Get all the visitors saved */
  getAll() {
    /* Check if there are visitors already and return them, else return an empty array */
    let visitors = JSON.parse(sessionStorage.getItem('visitors'));
    return visitors !== null ? visitors : [];
  }

}
