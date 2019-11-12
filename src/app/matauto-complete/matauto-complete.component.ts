import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';

export interface Food {
  value: string;
  display: string;
}

@Component({
  selector: 'app-matauto-complete',
  templateUrl: './matauto-complete.component.html',
  styleUrls: ['./matauto-complete.component.css']
})
export class MatautoCompleteComponent implements OnInit {

  title = 'materialApp';
  myControl = new FormControl();
  states;

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  selectedValue: string; 
   foods: Food[] = [
      {value: 'steak', display: 'Steak'},
      {value: 'pizza', display: 'Pizza'},
      {value: 'tacos', display: 'Tacos'}
   ];

   invert = false;
   thumbLabel = false;
   value = 0;
   vertical = false;


  constructor() {

  }
  //build list of states as map of key-value pairs
  loadStates() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
        Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
        Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
        Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
        North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
        South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
        Wisconsin, Wyoming';
    this.states = allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toUpperCase(),
        display: state
      };
    });
  }

  ngOnInit() {
    this.loadStates();
  }

}
