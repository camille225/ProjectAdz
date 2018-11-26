import { AdzRoutingModule } from './../adz-routing/adz-routing.module';
import { AllBooksService } from '../all-books.service';
import { BookSearchComponent } from './../book-search/book-search.component';
import { DetailBookComponent } from './../detail-book/detail-book.component';
import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { BookFindComponent } from '../book-find/book-find.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DetailBookComponent,
    BookFindComponent,
    BookSearchComponent,
    AllBooksService,
  ],
  providers: [],
})
export class BooksModule { }
