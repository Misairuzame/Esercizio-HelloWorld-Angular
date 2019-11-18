import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, counter {

  numero: number;

  constructor() {
    this.numero = 0;
  }

  incrementa() {
    this.numero++;
  }

  decrementa() {
    this.numero--;
  }

  reset() {
    this.numero = 0;
  }

  ngOnInit() {
  }

}

interface counter {
  numero: number;
}