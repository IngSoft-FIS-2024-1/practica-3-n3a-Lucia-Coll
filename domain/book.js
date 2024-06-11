class Book {
  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages, words = 0) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof title !== 'string' || title.trim().length === 0) {
      throw new Error('Invalid title');
    }
    this.#title = title.trim();
  }

  setAuthor(author) {
    if (typeof author !== 'string') {
      throw new Error('Invalid author');
    }
    this.#author = author.trim() || 'Anónimo';
  }

  setPages(pages) {
    if (typeof pages !== 'number' || isNaN(pages) || pages < 0) {
      throw new Error('Invalid pages');
    }
    this.#pages = Math.trunc(pages);
  }

  setWords(words) {
    if (typeof words !== 'number' || isNaN(words) || words < 0) {
      throw new Error('Invalid words');
    }
    this.#words = words;
  }

  wordsPerPage() {
    if (this.#pages === 0) {
      return 0;
    }
    return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;