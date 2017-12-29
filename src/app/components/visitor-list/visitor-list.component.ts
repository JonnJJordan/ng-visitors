import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visitor } from '../../models/Visitor';

@Component({
  selector: 'visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss']
})
export class VisitorListComponent implements OnInit {

  @Input() visitors: Array<Visitor>;
  @Output() onVisitorSelected = new EventEmitter<Visitor>();

  constructor() { }

  ngOnInit() {
  }

  setVisitor(v: Visitor) {
    this.onVisitorSelected.emit(v);
  }

}
