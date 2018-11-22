import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'adz-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor() { }
  name: string;
  ngOnInit() {
  }

  searchBook(): void {
    console.log('Submit');
  }
}
