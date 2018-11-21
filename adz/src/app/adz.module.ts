
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AdzComponent } from './adz.component';
import {BookSearchComponent} from './book-search/book-search.component';
import { MaterialAngularModule } from 'src/material-angular/material-angular.module';
@NgModule({
  declarations: [
    AdzComponent,
    BookSearchComponent,
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
