import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Visitor } from '../../models/Visitor';
import { FormErrorStateMatcher } from '../../helpers/FormErrorStateMatcher';
import { CountryService } from '../../services/country.service';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {

  @Output() onVisitorAdded = new EventEmitter<Visitor>();

  visitor: Visitor;
  visitorInfo: FormGroup;
  matcher: FormErrorStateMatcher;
  countries: Array<any>;
  minDate: Date;
  maxDate: Date;

  constructor(
    private _fb: FormBuilder,
    private countryService: CountryService,
    private visitorService: VisitorService
  ) { }

  ngOnInit() {

    this.visitorInfo = this._fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      birth: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.matcher = new FormErrorStateMatcher();
    this.minDate = new Date(1900, 0, 1);
    this.maxDate = new Date(2010, 0 , 1);

    this.countryService.getAll()
      .subscribe(countries => {
        this.countries = <Array<any>> countries;
      });
      
  }

  reset() {
    document.querySelector('form').reset();
  }

  addVisitor(e: Event) {
    
    e.preventDefault();
    const flag = this.countries.filter(c => c.name === this.visitorInfo.get('country').value).map(c => c.flag)[0];
    this.visitor = {...this.visitorInfo.value, flag};
    
    this.visitorService.add(this.visitor);
    
    this.reset();

    this.onVisitorAdded.emit(this.visitor);
  }

}
