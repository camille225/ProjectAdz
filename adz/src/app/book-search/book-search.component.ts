import { Books } from './../books';
import { AllBooksService } from '../all-books.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'adz-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {

  name: string;
  books: Books[];
  constructor(private router: Router, private allbooks: AllBooksService) { }

  ngOnInit() {
  }

  getBooksPa(achercher: string): void {
    this.allbooks.getBooksPa(achercher)
    .subscribe( books => this.books = books.items);
  }

  searchBook(achercher: string): void {
    console.log(achercher);
    console.log('Submit');
    const link: string[] = ['/booksearch', achercher];
    this.router.navigate(link);
  }


}
