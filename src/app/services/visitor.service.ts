import { Injectable } from '@angular/core';
import { Visitor } from '../models/Visitor';
@Injectable()
export class VisitorService {

  constructor() {}

  add(v: Visitor) {
    
    if (JSON.parse(sessionStorage.getItem('visitors')) !== null) {
      let visitors = JSON.parse(sessionStorage.getItem('visitors'));
      console.log('Ya existen visitantes!', visitors);
      visitors.push(v);
      sessionStorage.setItem('visitors', JSON.stringify(visitors));
    } else {
      console.log('Es el primero de todos!');
      let visitors = [];
      visitors.push(v);
      sessionStorage.setItem('visitors', JSON.stringify(visitors));
    }

  }

  getAll() {
    let visitors = JSON.parse(sessionStorage.getItem('visitors'));
    return visitors !== null ? visitors : [];
  }

}
