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
  /* Output to communicate with the parent */
  @Output() onVisitorAdded = new EventEmitter<Visitor>();

  /* Visitor to save */
  visitor: Visitor;
  /* Visitor Form */
  visitorInfo: FormGroup;
  /* Matcher to handle error validation */
  matcher: FormErrorStateMatcher;
  /* Countries to display on the select field */
  countries: Array<any>;
  /* Min date able to select */
  minDate: Date;
  /* Max date able to select */
  maxDate: Date;

  constructor(
    private _fb: FormBuilder,
    private countryService: CountryService,
    private visitorService: VisitorService
  ) { }

  ngOnInit() {
    /* Initialize properties */
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
  /* Reset form */
  reset() {
    document.querySelector('form').reset();
  }

  addVisitor(e: Event) {
    /* Prevent submit to reload the page */
    e.preventDefault();
    /* Filter countries array to get the selected country's flag */
    const flag = this.countries.filter(c => c.name === this.visitorInfo.get('country').value).map(c => c.flag)[0];
    this.visitor = {...this.visitorInfo.value, flag};
    /* Add the new visitor using the service */
    this.visitorService.add(this.visitor);
    /* Reset the form */
    this.reset();
    /* Tell the parent new visitor has been added */
    this.onVisitorAdded.emit(this.visitor);
  }

}
