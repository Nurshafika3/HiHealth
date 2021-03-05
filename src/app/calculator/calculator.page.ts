import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  calculate= true;
  clearbtn= false;
  bmiInfo= false;
  card = false;
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  constructor() { }
  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
      this.card = !this.card;
      this.clearbtn= !this.clearbtn;
      this.calculate= !this.calculate;
    }
  }

  clear(){
    this.bmiValue = 0;
    this.weight = 0;
    this.height = 0;
    this.bmiMessage = "";
    this.card = !this.card;
    this.clearbtn= !this.clearbtn;
    this.calculate= !this.calculate;
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }
  ngOnInit() {
  }


}
