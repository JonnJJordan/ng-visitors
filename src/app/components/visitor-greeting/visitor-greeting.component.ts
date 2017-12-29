import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Visitor } from '../../models/Visitor';
import * as moment  from 'moment';

@Component({
  selector: 'visitor-greeting',
  templateUrl: './visitor-greeting.component.html',
  styleUrls: ['./visitor-greeting.component.scss']
})
export class VisitorGreetingComponent implements OnInit, OnChanges {

  @Input() visitor: Visitor

  day: number;
  monthName: string;
  year: number;

  constructor() { }

  ngOnInit() {

    moment.locale('es');

  }

  ngOnChanges(changes: SimpleChanges) {
    let visitor: Visitor = changes.visitor.currentValue;

    if (visitor !== null) {
      this.day = visitor.birth.getDate();

      this.monthName = moment().month(visitor.birth.getMonth()).format('MMMM').toString();
      this.year = moment().add(1, 'year').year();
    }
  }

}
