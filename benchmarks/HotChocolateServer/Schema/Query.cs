using HotChocolate;
using HotChocolateServer.Data;

namespace HotChocolateServer.Schema
{
    public class Query
    {
        public Author[] GetAuthors([Service] AuthorRepository authorRepository)
        {
            return authorRepository.Authors;
        } 
    }
}