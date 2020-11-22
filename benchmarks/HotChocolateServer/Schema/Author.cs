namespace HotChocolateServer.Schema
{
    public class Author
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public Book[] Books { get; set; }
    }
}