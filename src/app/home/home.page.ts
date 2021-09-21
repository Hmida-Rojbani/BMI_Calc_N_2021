import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  height: number;
  weight: number;
  bmi: number;

  constructor() {}

  bmiCalculation(){
    this.bmi = this.weight / (this.height*this.height)*10000;
    console.log('bmi', this.bmi);
  }

}
