/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

class Book {
  title: string;
  author: string;
  publicationYear: number;
  constructor(title: string, author: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }
  addBook(book: Book): void {
    this.books.push(book);
  }

  getListBooks(): Book[] {
    return this.books;
  }

  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getTotalNumberOfBooks(): number {
    return this.books.length;
  }
}

class BookSearch {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getBookByTitle(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }

  getBooksByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }

  getBooksByPublicationYear(publicationYear: number): Book[] {
    return this.books.filter(
      (book) => book.publicationYear === publicationYear
    );
  }
}

export { Book, Library, BookSearch };

let lib: Library;
lib = new Library();

let book1: Book;
book1 = new Book("Clean Code", "Edric Cao", 2023);

let book2: Book;
book2 = new Book("Design Pattern", "Edric Cao", 2022);

lib.addBook(book1);
lib.addBook(book2);

let search: BookSearch;
search = new BookSearch([book1, book2]);

console.log(lib.getListBooks()); // Output: [ Book { title: 'Clean Code', author: 'Edric Cao', publicationYear: 2023 }, Book { title: 'Design Pattern', author: 'Edric Cao', publicationYear: 2022 } ]
console.log(search.getBookByTitle("Clean Code")); // Output: Book { title: 'Clean Code', author: 'Edric Cao', publicationYear: 2023 }
