import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorGreetingComponent } from './visitor-greeting.component';

describe('VisitorGreetingComponent', () => {
  let component: VisitorGreetingComponent;
  let fixture: ComponentFixture<VisitorGreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorGreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
