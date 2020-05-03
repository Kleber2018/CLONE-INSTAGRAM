// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// import { Book } from '../models/book';
// import { Chapter } from '../models/chapter';
// import { Graphicnovel } from '../models/graphicnovel';
// import { Section } from '../models/section';
// import { Author } from './../models/author';
// import { AngularfirebaseService } from './angularfirebase.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirestoreService {
//   constructor(private afb: AngularfirebaseService) {}

//   // Getters
//   getAuthors(): Observable<Author[]> {
//     return this.afb.colWithIds$<Author[]>('authors');
//   }
//   getBook(bookId: string): Observable<Book> {
//     return this.afb.doc$<Book>(`books/${bookId}`);
//   }
//   getBookChapter(bookId: string, chapterId: string): Observable<Chapter> {
//     return this.afb.doc$<Chapter>(`books/${bookId}/chapters/${chapterId}`);
//   }
//   getBookChapters(bookId: string): Observable<Chapter[]> {
//     return this.afb.colWithIds$<Chapter[]>(`books/${bookId}/chapters`);
//   }
//   getBooks(): Observable<Book[]> {
//     // Start Using AngularFirebase Service!!
//     return this.afb.colWithIds$<Book[]>('books');
//   }
//   getBookSection(
//     bookId: string,
//     chapterId: string,
//     sectionId: string
//   ): Observable<Section> {
//     // Start Using AngularFirebase Service!!
//     return this.afb.doc$<Section>(
//       `books/${bookId}/chapters/${chapterId}/sections/${sectionId}`
//     );
//   }

//   getGraphicNovels(): Observable<Graphicnovel[]> {
//     return this.afb.colWithIds$<Graphicnovel[]>('graphicnovels');
//   }

// }
