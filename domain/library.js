import Book from './book.js';

class Library {
  #name;
  #inventory = [];
   // Eliminado: #totalWords, #wordCount

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof name !== 'string') {
      throw new Error('Invalid name');
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error('Invalid name');
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words = 0) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    return this.#inventory.reduce((total, book) => total + book.getWords(), 0);
  }
}

export default Library;