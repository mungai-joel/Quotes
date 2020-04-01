import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quotes"

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
