import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Visitor } from '../../models/Visitor';
import * as moment  from 'moment';

@Component({
  selector: 'visitor-greeting',
  templateUrl: './visitor-greeting.component.html',
  styleUrls: ['./visitor-greeting.component.scss']
})
export class VisitorGreetingComponent implements OnInit, OnChanges {

  /* Current visitor to greet*/
  @Input() visitor: Visitor

  /* Date properties */
  day: number;
  monthName: string;
  year: number;

  constructor() { }

  ngOnInit() {
    /* Set the locale to spanish */
    moment.locale('es');

  }

  ngOnChanges(changes: SimpleChanges) {
    /* When input value changes, check if visitor isn't null and format the properties */
    let visitor: Visitor = changes.visitor.currentValue;

    if (visitor !== null) {
      this.day = visitor.birth.getDate();

      this.monthName = moment().month(visitor.birth.getMonth()).format('MMMM').toString();
      this.year = moment().add(1, 'year').year();
    }
  }

}
