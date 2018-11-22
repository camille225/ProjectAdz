import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Input, NgModule } from '@angular/core';
import { AdzComponent } from './adz.component';
import {BookSearchComponent} from './book-search/book-search.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { MaterialAngularModule } from 'src/material-angular/material-angular.module';

@NgModule({
  declarations: [
    AdzComponent,
    BookSearchComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
  ],
  providers: [],
  bootstrap: [AdzComponent]
})
export class AdzModule { }
