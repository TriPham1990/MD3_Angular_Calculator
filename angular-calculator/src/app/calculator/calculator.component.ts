import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber: number;
  secondNumber: number;
  result: number;
  operator: string;

  onFirstNumberChange(value) {
    this.firstNumber = Number(value);
  }

  onSecondNumberChange(value) {
    this.secondNumber = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+' :
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-' :
        this.result = this.firstNumber -  this.secondNumber;
        break;
      case '*' :
        this.result = this.firstNumber *  this.secondNumber;
        break;
      case '/' :
        this.result = this.firstNumber /  this.secondNumber;
        break;
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
