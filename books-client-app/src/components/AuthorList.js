import React from 'react';

const AuthorList=({authors=[],author})=>{
    //TODO: Initialize Here

    authors=[
        {name:'Vivek',id:'vivek'},
        {name:'JK Rowling',id:"jkr"}
    ];
    
    const getClasses=( currentAuthor )=>{
        let defaultClasses='list-group-item list-group-item-action ';
       // console.log(currentBook.isbn,book.isbn, currentBook.isbn===book.isbn);
        if(author && currentAuthor.id ===author.id)
            defaultClasses+="active";

        return defaultClasses;
    }

    const handleSelect=(a)=>{
        console.log('selected',a);
    }


    return (
        <div className='AuthorListScreen'>
            
            <div className="list-group">
                {authors.map(author=>(
                    
                    <button key={author.id} className={getClasses(author)}
                            onClick={()=>handleSelect(author)}
                        >
                    
                        {author.name}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default AuthorList;


