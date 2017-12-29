import { Component, OnInit } from '@angular/core';
import { VisitorService } from './services/visitor.service';
import { Visitor } from './models/Visitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interviewed: string;
  visitor: Visitor
  visitors: Array<Visitor> | Array<any>;

  constructor(
    private visitorService: VisitorService
  ) { }

  ngOnInit() {
    this.interviewed = 'Jonn Jordan';
    this.visitor = null;
    this.fetchVisitors();
  }

  fetchVisitors() {
    this.visitors = this.visitorService.getAll();
  }

  onVisitorAdded(v: Visitor) {
    this.visitor = v;
    this.fetchVisitors();
  }

  onVisitorSelected(v: Visitor) {
    v.birth = new Date(v.birth);
    this.visitor = v;
  }
}
