import React from 'react';

const BookListComponent=({books})=>{
    //TODO: Initialize Here
  

    return (
        <div className='BookListScreen'>
            

            <div className="list-group">
                {books.map(book=>(
                    
                    <button key={book.isbn} className='list-group-item list-group-item-action'>
                       
                        {book.title}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default BookListComponent;


