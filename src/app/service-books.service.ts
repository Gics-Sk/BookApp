import { Injectable } from '@angular/core';
import { interFaceBook } from './InterFaceBook';
import { BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class ServiceBooksService {
books: interFaceBook[]= BOOKS;
  constructor() { }
}
