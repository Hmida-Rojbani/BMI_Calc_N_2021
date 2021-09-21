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
  description: string;
  imgSrc: string;

  constructor() {}

  selectDescription(){
    const prefixe = '../../assets/bmi/';
    if (this.bmi < 18.5) {
      this.description = 'underweight';
      this.imgSrc = prefixe+'underweight.png';
    } else if (this.bmi < 25) {
      this.description = 'normal';
      this.imgSrc = prefixe+'normal.png';
    } else if (this.bmi < 30) {
      this.description = 'overweight';
      this.imgSrc = prefixe+'overweight.png';
    }else if (this.bmi < 35) {
      this.description = 'obese';
      this.imgSrc = prefixe+'obese.png';
    } else {
      this.description = 'exteremly obese';
      this.imgSrc = prefixe+'ext_obese.png';
    }
  }

  bmiCalculation(){
    this.bmi = this.weight / (this.height*this.height)*10000;
    this.selectDescription();
  }

}
