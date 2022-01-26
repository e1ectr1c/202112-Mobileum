import axios,{getAuthorizationHeader} from './axios';

class BookService{
 

  addBook=async (book)=>{
    
    //console.log('posting book book',book);
    
    if(!book || !book.isbn || !book.title || !book.author)
      throw new Error('Invalid Book Details');

    //we need to add the token to request
    //let header=getAuthorizationHeader();
    // console.log('header',header);
    
    let response = await axios.post('/books',book);    
    return response.data;

  }

  getAllBooks=async()=>{
    //console.log('getting data from server');
    let response= await axios.get("/books");  // /api/books;
   // console.log('response.data',response.data);
    return response.data;
   
  }

  getBookByIsbn=async(isbn)=>{
    let response=await axios.get(`/books/${isbn}`);
   // console.log('isbn',response.data);
    return response.data;
  }

}

export default new BookService();