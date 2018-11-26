import { Books } from './books';
import { Params } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Rx';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AllBooksService {

  constructor(private http: HttpClient) { }
  books: Books[];
  private booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  getBooksPa(name: string): Observable<Books[]> {
    if (!name.trim()) {
      return of([]);
    }
    const url = `${this.booksUrl}${name}`;
    console.log(url);
    return this.http.get<Books[]>(url).pipe(
      tap(_ => this.log(`fetched books`)),
      catchError(this.handleError('getBooksPa', []))
    );
  }
  searchBooks(term: string, books): Observable<Books[]> {
    if (!term.trim()){
      return of([]);
    }

  }
}
