import getHttp from './axios';



class BookService{

  

 

  addBook=async (book)=>{
    
    console.log('book in add book',book);
    
    if(!book || !book.isbn || !book.title || !book.author)
      throw new Error('Invalid Book Details');

    //todo: implement add book later
    let axios=await getHttp();
    let response = await axios.post('/books',book);
    

  }


  getAllBooks=async()=>{
    console.log('getting data from server');
    let axios= await getHttp();
    let response= await axios.get("/books");  // /api/books;
    console.log('response.data',response.data);
    return response.data;
   
  }


  getBookByIsbn=async(isbn)=>{
    let axios=await getHttp();
    let response=await axios.get(`/books/${isbn}`);
    console.log('isbn',response.data);
    return response.data;
  }

}

export default new BookService();