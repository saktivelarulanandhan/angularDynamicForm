import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  @Input('adminObj') adminObj: any;

  constructor() { 
    console.log( this.adminObj);
  }

  ngOnInit() {
  }

  

}
