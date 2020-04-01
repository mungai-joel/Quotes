import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = []
  addNewQuote(newEntry) {
    this.quotes.push(newEntry)
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm("Are you sure ?")

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
