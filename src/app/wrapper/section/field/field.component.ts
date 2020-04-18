import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input('field') field:any;
  @Input('groups') groups:any;
  dropdownSettings = {};
  
  constructor() { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  getSectionName(sections) {
    return Object.keys(sections)[0];
  }

  loadDefault(field) {
     const filterValue = field.selectOptions.find((e) => e.key.toLowerCase() === field.onLoad.toLowerCase());
    return filterValue['value'];
  }
}
