import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-indicators',
  templateUrl: './buttons-indicators.component.html',
  styleUrls: ['./buttons-indicators.component.css']
})
export class ButtonsIndicatorsComponent implements OnInit {

  title = 'materialApp';
  color = 'primary';
  mode = 'determinate';
  value = 50;

  colorBar = 'primary';
  modeBar = 'determinate';
  valueBar = 50;
  bufferValue = 75;

  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  colorRipple: string;

  constructor() { }

  ngOnInit() {
  }

}
