import { AllBooksService } from './../all-books.service';
import { BookFindComponent } from './../book-find/book-find.component';
import { Books } from './../books';
import { BookSearchComponent } from './../book-search/book-search.component';
import { Component, Input, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'adz-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  @Input()
  bookselect: any ;


  constructor(private bottom: MatBottomSheetRef<DetailBookComponent>, private allbook: AllBooksService) {
   }


   openLink(event: MouseEvent): void {
    this.bottom.dismiss();
    event.preventDefault();
   }

  ngOnInit() {
    this.allbook.getBook(name)
    .subscribe( books => this.bookselect = books);
  }


}
