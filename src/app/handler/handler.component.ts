import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css']
})
export class HandlerComponent implements OnInit {


  @Input('sections') sections: any;
  copyofSection : any;
  constructor() { }

  ngOnInit() {
    this.copyofSection =JSON.stringify(this.sections);
  }

  prepareFieldObj(fields) {
    const formFields = fields.map(e => (({ name, onLoad, defaultOptions, groups }) => ({ name, onLoad, defaultOptions, groups }))(e));
    return formFields.map(e => {
      e.groups = e.groups ? e.groups.map(f => (({ name, onLoad, defaultOptions, groups }) => ({ name, onLoad, defaultOptions, groups }))(f)) : [];
      return e;
    });
  }

  submitHandler() {
    console.log(this.sections);
    const formSubmitObj = this.sections.map(e => {
      const copyObj = { ...e };
      console.log(copyObj[Object.keys(e)[0]]['field']['groups']);
      copyObj[Object.keys(e)[0]] = { id: copyObj[Object.keys(e)[0]].name, field: Array(1).fill(this.prepareFieldObj(copyObj[Object.keys(e)[0]]['field'])) };
      return copyObj;
    });

    console.log(formSubmitObj);
  }

  resetHandler() {
    console.log(this.copyofSection);
    this.sections = JSON.parse(this.copyofSection);

    // have to add an event emitter to update the object
  }

}
