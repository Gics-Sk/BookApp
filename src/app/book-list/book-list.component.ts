import { Component, OnInit } from '@angular/core';
import { interFaceBook } from '../InterFaceBook';
import { ServiceBooksService } from '../service-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
books?:interFaceBook[];
constructor(private BooksService : ServiceBooksService){
  
}
  ngOnInit(): void {
    this.books = this.BooksService.getBooks();
  }

}
