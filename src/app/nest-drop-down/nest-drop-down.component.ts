import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nest-drop-down',
  templateUrl: './nest-drop-down.component.html',
  styleUrls: ['./nest-drop-down.component.css']
})
export class NestDropDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  objectKeys = Object.keys;

  my_menu = {
    'main1': ['sub1', 'sub2'],
    'main2': ['sub1', 'sub2', 'sub3'],
  };
}
