import { Input, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AllBooksService } from './all-books.service';
import { AdzRoutingModule } from './adz-routing/adz-routing.module';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdzComponent } from './adz.component';
import {BookSearchComponent} from './book-search/book-search.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { MaterialAngularModule } from 'src/material-angular/material-angular.module';
import { BookFindComponent } from './book-find/book-find.component';

@NgModule({
  declarations: [
    AdzComponent,
    BookSearchComponent,
    BookFindComponent,
    DetailBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    FormsModule,
    AdzRoutingModule,
  ],
  entryComponents: [
    DetailBookComponent,
  ],
  providers: [AllBooksService],
  bootstrap: [AdzComponent]
})
export class AdzModule { }
