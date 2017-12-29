import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visitor } from '../../models/Visitor';

@Component({
  selector: 'visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss']
})
export class VisitorListComponent implements OnInit {

  /* Visitors to display */
  @Input() visitors: Array<Visitor>;
  /* Output to communicate with the parent */
  @Output() onVisitorSelected = new EventEmitter<Visitor>();

  constructor() { }

  ngOnInit() {
  }

  /* Tell the parent a visitor is selected and send it to him */
  setVisitor(v: Visitor) {
    this.onVisitorSelected.emit(v);
  }

}
