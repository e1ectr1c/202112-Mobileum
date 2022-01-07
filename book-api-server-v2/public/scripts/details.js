
(

    function () {

        const params = getQueryParams();

        const isbn = params.isbn;
        let error;

        const getBookByIsbn = async (isbn) => {

            if (!isbn)
                throw new Error(
                    `
                    <h2>No ISBN Supplied</h2>
                    <p>Please supply isbn like
                        <a href="http://localhost:4000/details.html?isbn=1408855658">
                        http://localhost:4000/details.html?isbn=1408855658
                        </a>
                    <p>
                `
                );


            let response = await fetch(`http://localhost:4000/api/books/${isbn}`);
            let book = await response.json();
            
            if (!book)
                throw new Error(`
                    <h2>No Book with ISBN ${isbn}</h2>
                    <a href='/'>Go Back to Book List</a>                
                `);


            return book;


        }


        const infoDiv = document.getElementById("info");
        const errorDiv = document.getElementById("error");

        getBookByIsbn(isbn)
            .then(book=>{
                errorDiv.style.display = 'none';
                infoDiv.style.display = 'block';
                console.log('book',book)
                document.getElementById("book-title").innerHTML = book.title;
                document.getElementById("book-author").innerHTML = book.author;
                document.getElementById("book-details-cover").src = book.cover;
                document.getElementById("book-price").innerHTML = ` ₹ ${book.price}`;
                document.getElementById("book-rating").innerHTML = `${book.rating} / 5`;
                document.getElementById("book-details").innerHTML = `${book.description}`;
            })
            .catch(error=>{
                errorDiv.innerHTML = error.message;
                errorDiv.style.display = 'block';
                infoDiv.style.display = 'none';
            })


      

    }

)();