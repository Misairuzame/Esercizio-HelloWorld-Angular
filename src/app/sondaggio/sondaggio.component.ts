import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sondaggio',
  templateUrl: './sondaggio.component.html',
  styleUrls: ['./sondaggio.component.css']
})
export class SondaggioComponent implements OnInit, sondaggio {

  title: string;
  serietv: string[];
  serie: string;
  piaciute: number;
  nonpiaciute: number;

  constructor() {
    this.title = "Sondaggio su Serie TV";
    this.serietv = ["The Walking Dead", "Stranger Things", "Game of Thrones", "Breaking Bad", "The Office"];
    this.serie = this.serietv[0];
    this.piaciute = 0;
    this.nonpiaciute = 0;
  }

  ngOnInit() {
  }

  liked() {
    this.piaciute++;
  }

  disliked() {
    this.nonpiaciute++;
  }
  //TODO: disabilitare il click
  disableClick(id: number) {
    document.getElementById(id.toString()).innerHTML = "<i>Votato!</i>";
  }

}

interface sondaggio {
  title: string;
  serietv: string[];
  serie: string;
  piaciute: number;
  nonpiaciute: number;
}