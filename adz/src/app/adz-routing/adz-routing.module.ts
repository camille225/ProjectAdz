import { BookFindComponent } from './../book-find/book-find.component';
import { BookSearchComponent } from './../book-search/book-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const adzRoutes: Routes = [
  {path: 'booksearch', component: BookSearchComponent},
  {path: 'booksearch/:names', component: BookFindComponent},
  {path: '', redirectTo: 'booksearch', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adzRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AdzRoutingModule { }
