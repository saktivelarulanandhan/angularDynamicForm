import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-header',
  templateUrl: './field-header.component.html',
  styleUrls: ['./field-header.component.css']
})
export class FieldHeaderComponent implements OnInit {

  @Input('section') section:any;
  
  constructor() { }

  ngOnInit() {
  }

  getSectionName(sections) {
    return Object.keys(sections)[0];
  }
}
