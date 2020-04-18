import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input('adminObj') adminObj: any;
  @Input('expand') expand: any;


  constructor() {
    console.log(this.adminObj);
  }

  ngOnInit() {
  }

  getSectionName(sections) {
    return Object.keys(sections)[0];
  }

  enableDisplay(fieldList) {
    console.log("Calling Enable Display...");
    fieldList.map(currField => {     
      currField.readWrite = currField.elementType !== 'NA' ? true : false;
      if (currField.groups)
          currField.groups.map(item => item.readWrite = item.elementType !== 'NA' ?  true : false)

    })
  }



}
