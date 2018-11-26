import { Books } from './../books';
import { AllBooksService } from './../all-books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { BookSearchComponent } from 'src/app/book-search/book-search.component';
import { DetailBookComponent } from 'src/app/detail-book/detail-book.component';


export interface Filtres {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'adz-book-find',
  templateUrl: './book-find.component.html',
  styleUrls: ['./book-find.component.css']
})
export class BookFindComponent implements OnInit {

  /*books = [{
    kind: 'books#volume',
    id: 'sX4YogEACAAJ',
    etag: 'o8UEyXqxWrA',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/sX4YogEACAAJ',
    volumeInfo: {
    title: 'L enfant noir',
    subtitle: 'roman',
    authors: [
    'Camara Laye'
    ],
    publisher: 'Presse Pocket',
    publishedDate: '2007-07-01',
    description: 'Je ne pensais quà moi-même et puis, à mesure que j écrivais, je me suis aperçu que je traçais un portrait de ma Haute-Guinée natale. Au-delà du récit autobiographique d un jeune écrivain de vingt-cinq ans, Lenfant noir nous restitue, dans toute sa vérité, la vie quotidienne, les traditions et les coutumes de tout un peuple. Un livre intemporel plein de finesse et de talent qui sest imposé comme l un des classiques de notre temps.',
    industryIdentifiers: [
    {
    type: 'ISBN_10',
    identifier: '2266178946'
    },
    {
    type: 'ISBN_13',
    identifier: '9782266178945'
    }
    ],
    readingModes: {
    text: false,
    image: false
    },
    pageCount: 221,
    printType: 'BOOK',
    categories: [
    'Fiction'
    ],
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    imageLinks: {
    smallThumbnail: 'http://books.google.com/books/content?id=sX4YogEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail: 'http://books.google.com/books/content?id=sX4YogEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    language: 'fr',
    previewLink: 'http://books.google.fr/books?id=sX4YogEACAAJ&dq=camara+laye&hl=&cd=1&source=gbs_api',
    infoLink: 'http://books.google.fr/books?id=sX4YogEACAAJ&dq=camara+laye&hl=&source=gbs_api',
    canonicalVolumeLink: 'https://books.google.com/books/about/L_enfant_noir.html?hl=&id=sX4YogEACAAJ'
    },
    saleInfo: {
    country: 'FR',
    saleability: 'NOT_FOR_SALE',
    isEbook: false
    },
    accessInfo: {
    country: 'FR',
    viewability: 'NO_PAGES',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
    isAvailable: false
    },
    pdf: {
    isAvailable: false
    },
    webReaderLink: 'http://play.google.com/books/reader?id=sX4YogEACAAJ&hl=&printsec=frontcover&source=gbs_api',
    accessViewStatus: 'NONE',
    quoteSharingAllowed: false
    },
    searchInfo: {
    textSnippet: '&quot; Au-delà du récit autobiographique d&#39;un jeune écrivain de vingt-cinq ans, L&#39;enfant noir nous restitue, dans toute sa vérité, la vie quotidienne, les traditions et les coutumes de tout un peuple.'
      }
    },
    {
      kind: 'books#volume',
      id: '0cm2AAAAIAAJ',
      etag: 'f5G/NZdnpHQ',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/0cm2AAAAIAAJ',
      volumeInfo: {
      title: 'Camara Laye et le langage de la fable politique',
      subtitle: 'à propos dun texte de Lenfant noir : leçon publique du 14 février 1974, cours de Thomas Melone',
      authors: [
      'Thomas Melone'
      ],
      publishedDate: '1974',
      industryIdentifiers: [
      {
      type: 'OTHER',
      identifier: 'STANFORD:36105120033555'
      }
      ],
      readingModes: {
      text: false,
      image: false
      },
      pageCount: 70,
      printType: 'BOOK',
      categories: [
      'Authors, Guinean'
      ],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      language: 'fr',
      previewLink: 'http://books.google.fr/books?id=0cm2AAAAIAAJ&q=camara+laye&dq=camara+laye&hl=&cd=2&source=gbs_api',
      infoLink: 'http://books.google.fr/books?id=0cm2AAAAIAAJ&dq=camara+laye&hl=&source=gbs_api',
      canonicalVolumeLink: 'https://books.google.com/books/about/Camara_Laye_et_le_langage_de_la_fable_po.html?hl=&id=0cm2AAAAIAAJ'
      },
      saleInfo: {
      country: 'FR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false
      },
      accessInfo: {
      country: 'FR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
      isAvailable: false
      },
      pdf: {
      isAvailable: false
      },
      webReaderLink: 'http://play.google.com/books/reader?id=0cm2AAAAIAAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false
      }
      }
    ]
  ;*/
  filtres = [
    {value: '0', viewValue: 'Auteurs'},
  {value: 'pizza-1', viewValue: 'Categories'},
  ];

  find: string;
  books: Books[] = null;
  constructor(private bottomSheet: MatBottomSheet,
    private route: ActivatedRoute,
    private router: Router,
    private allbooks: AllBooksService
  ) { }


  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('names');
    console.log(name);
    this.allbooks.getBooksPa(name)
    .subscribe( books => this.books = books.items);
    console.log(this.books);
  }

// information sur le book en popup
  selectBook(book): void {
    this.bottomSheet.open(DetailBookComponent);
  }

  goBack(): void {
    this.router.navigate(['/booksearch']);
  }

}
