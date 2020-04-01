import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Quotes } from "../quote"

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter();
  quoteQuotes: string;
  quoteName: string;
  quoteDate: Date = new Date();
  theQuote: any;

  submitQuote() {
    this.theQuote = new Quotes(this.quoteName, this.quoteQuotes, this.quoteDate);
    this.quoteQuotes = "";
    this.quoteName = "";
    this.emitQuote.emit(this.theQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
