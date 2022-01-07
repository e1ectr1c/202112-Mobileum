

(

    function() {

        const baseUrl='http://localhost:4000/api/books';

        const getAllBooks=async()=>{
            //get the book by calling some REST service

            const response=await fetch(baseUrl);
            const books=await response.json();
           // console.log('books',books);
            

            return books;

        }
        

        const searchText = document.getElementById('search-text');
        const searchType = document.getElementById('search-type');
        const searchButton = document.getElementById('search-button');
        const bookList = document.getElementById('book-list');

        function populateList(books) {
            bookList.innerHTML = '';

            books.forEach(book => {

                bookList.innerHTML += `
                <tr id="${book.isbn}">
                    <td>
                        <img src='${book.cover}'/>
                    </td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>₹${book.price}</td>
                    <td>${book.rating}</td>
                    <td>
                        <a class='action-link' href="/details.html?isbn=${book.isbn}" >details</a>
                        <a class='action-link' href="/edit.html?isbn=${book.isbn}"> edit</a>
                        <a class='action-link danger' onClick="deleteBook(${book.isbn})" href="#" > delete</a>
                    </td>
                </tr>
                
                `;

            });

        }

        window.deleteBook=async(isbn)=>{
           
            const response=await fetch(`${baseUrl}/${isbn}`,{
                method: 'DELETE'
            });

            if(response.status===204){
                console.log('deleted...');
                document.getElementById(isbn).remove();
            } else{
                console.log('unexpected delete response', response);
            }


        }

        document.body.onload =async function () {
           
            //get the data from http://localhost:4000/api/books

            let books= await getAllBooks();  //calls fetch

            populateList(books);
        }



        function handleSearch() {
            const type = searchType.value;
            const text = searchText.value;
            let result = [];
            switch (type) {
                case 'isbn':
                    break;
                 
            }

            populateList(result);
        }

        searchButton.onclick = handleSearch;


    }


)();

