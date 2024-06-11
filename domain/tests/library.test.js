import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js'; // Ajusta la ruta de importación según la estructura de tu proyecto


describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('should set the name of the library correctly', () => {
    myLibrary.setName('Nueva Biblioteca');
    expect(myLibrary.getName()).toBe('Nueva Biblioteca');
  });

  it('should throw an error if the name is not a string', () => {
    expect(() => myLibrary.setName(123)).toThrow('Invalid name');
  });

  it('should throw an error if the name is an empty string', () => {
    expect(() => myLibrary.setName('')).toThrow('Invalid name');
  });

  it('should return the name of the library', () => {
    expect(myLibrary.getName()).toBe('Biblioteca');
  });

  it('should add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 350, 50000);
    expect(myLibrary.totalBooks()).toBe(1);
    const inventory = myLibrary.getInventory();
    expect(inventory.length).toBe(1);
    expect(inventory[0].getTitle()).toBe('Cuentos de la Selva');
    expect(inventory[0].getAuthor()).toBe('Horacio Quiroga');
  });

  it('should return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 350, 50000);
    myLibrary.addBook('El Principito', 'Antoine de Saint-Exupéry', 96, 15000);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('should return the total number of words', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 350, 50000);
    myLibrary.addBook('El Principito', 'Antoine de Saint-Exupéry', 96, 15000);
    expect(myLibrary.totalWords()).toBe(65000);
  });

  it('should return 0 if there are no books', () => {
    expect(myLibrary.totalWords()).toBe(0);
  });
});