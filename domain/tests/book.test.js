import { describe, it, expect, beforeEach } from '@jest/globals';
import Book from '../book.js'; // Ajusta la ruta de importación según la estructura de tu proyecto

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('returns the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('returns the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('returns the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('checks title is a string', () => {
    expect(() => new Book(451, 'Horacio Quiroga', 350)).toThrow('Invalid title');
  });

  it('checks title is not empty', () => {
    expect(() => new Book('', 'Horacio Quiroga', 350)).toThrow('Invalid title');
  });

  it('checks author is a string', () => {
    expect(() => new Book('Cuentos de la Selva', 12345, 350)).toThrow('Invalid author');
  });

  it('checks author defaults to "Anónimo" if empty', () => {
    const book = new Book('Cuentos de la Selva', '', 350);
    expect(book.getAuthor()).toBe('Anónimo');
  });

  it('checks page param is a number', () => {
    expect(() => new Book('Cuentos de la Selva', 'Horacio Quiroga', 'three hundred and fifty')).toThrow('Invalid pages');
  });

  it('checks pages not < 0', () => {
    expect(() => new Book('Cuentos de la Selva', 'Horacio Quiroga', -1)).toThrow('Invalid pages');
  });

  it('sets and gets words correctly', () => {
    myBook.setWords(50000);
    expect(myBook.getWords()).toBe(50000);
  });

  it('throws error for invalid words', () => {
    expect(() => myBook.setWords('invalid')).toThrow('Invalid words');
    expect(() => myBook.setWords(-100)).toThrow('Invalid words');
    expect(() => myBook.setWords(NaN)).toThrow('Invalid words');
  });

  it('correctly calculates words per page', () => {
    myBook.setWords(70000);
    expect(myBook.wordsPerPage()).toBeCloseTo(200);
  });

  it('returns correct string representation', () => {
    myBook.setWords(70000);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 70000');
  });

  it('calculates words per page correctly', () => {
    myBook.setWords(70000);
    expect(myBook.wordsPerPage()).toBeCloseTo(200);
  });

  it('returns 0 for words per page if pages is 0', () => {
    const book = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0, 70000);
    expect(book.wordsPerPage()).toBe(0);
  });
});