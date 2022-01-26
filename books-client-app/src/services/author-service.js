import axios from './axios';

class AuthorService {

    getAllAuthors=async ()=>{
        let response=await axios.get('authors');
        return response.data;
    }

    addAuthor=async(author)=>{
        let response=await axios.post('authors',author);
        return response.data;
    }

    getAuthorById=async (id)=>{
        let response=await axios.get(`authors/${id}`);
        return response.data;
    }

    deleteAuthor=async(id)=>{
        let response=await axios.delete(`authors/${id}`);
        return response;
    }

    updateAuthor=async(author)=>{
        let response=await axios.put(`authors/${author.id}`,author);
        return response.data;
    }
};

export default new AuthorService();