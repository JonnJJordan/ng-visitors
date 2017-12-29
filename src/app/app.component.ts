import { Component, OnInit } from '@angular/core';
import { VisitorService } from './services/visitor.service';
import { Visitor } from './models/Visitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /* Interviewed name */
  interviewed: string;
  /* Selected visitor info */
  visitor: Visitor
  /* Array of visitors fetched from sessionStorage */
  visitors: Array<Visitor> | Array<any>;

  constructor(
    private visitorService: VisitorService
  ) { }

  /* Initialize properties */
  ngOnInit() {
    this.interviewed = 'Jonn Jordan';
    this.visitor = null;
    this.fetchVisitors();
  }

  /* Fetch all visitors saved */
  fetchVisitors() {
    this.visitors = this.visitorService.getAll();
  }

  /* When a visitor is added from child component bind it to the local property for the greeting and refetch the visitors */
  onVisitorAdded(v: Visitor) {
    this.visitor = v;
    this.fetchVisitors();
  }

  /* When a visitor is selected from child component bind it to the local property for the greeting */
  onVisitorSelected(v: Visitor) {
    /* Birth property has to be recasted as date because it's converted into a string during the communication between child and parent */
    v.birth = new Date(v.birth);
    this.visitor = v;
  }
}
