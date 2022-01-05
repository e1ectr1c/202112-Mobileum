const BookManager=require('../../books-api-v1/BookManager');
const Book=require('../../books-api-v1/Book');

describe('BooKManager Tests',()=>{
    let bookManager;
    const validExistingIsbn="1";
    const invalidIsbn="0";
    const newIsbn="100";

    beforeEach(()=>{
        bookManager = new BookManager();
        bookManager.addBook(new Book(validExistingIsbn,"Book1","Author1",100,12));
        bookManager.addBook(new Book("2","Book2","Author1",100,12));
        bookManager.addBook(new Book("3","Book3","Author2",100,12));
    })

    describe('BookManager getAllBooks tests',()=>{

        it('should return all books',()=>{

            const result=bookManager.getAllBooks();

            expect(result.length).toBe(3);
        });
    });

    describe('BookManager addBook tests',()=>{

        it('should throw error for no book is supplied',()=>{

            expect(()=>bookManager.addBook()).toThrow('Missing Parameter');
        });

        it('should throw error if title is not supplied',()=>{
            expect(()=>bookManager.addBook(new Book()))
                .toThrow('title');
        });

        it('should successfully add a valid book',()=>{

            const bookCountBeforeAdd=bookManager.getBookCount();

            bookManager.addBook(new Book(newIsbn,"The Accursed God","Vivek Dutta Mishra",399,4.3));

            const bookCountAfterAdd=bookManager.getBookCount();
            expect(bookCountAfterAdd).toBe(bookCountBeforeAdd+1);

        });

        it('should throw error while adding book with duplicate isbn',()=>{
            
            expect(()=>bookManager.addBook(new Book(validExistingIsbn,"Title","Author",200,1)))
                .toThrow('Duplicate ISBN:'+validExistingIsbn);

        });

    });

    describe("BookManager getBookByIsbn tests",()=>{

        it('should return valid book with valid isbn',()=>{
            var book=bookManager.getBookByIsbn(validExistingIsbn);
            expect(book).not.toBeNull();
            expect(book.isbn).toBe(validExistingIsbn);

        });

        it('should throw error for invalid isbn',()=>{

            expect(()=>bookManager.getBookByIsbn(invalidIsbn))
                .toThrow(`Invalid ISBN: ${invalidIsbn}`);
        });


    });

});