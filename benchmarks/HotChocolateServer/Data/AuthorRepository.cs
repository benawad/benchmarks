using System;
using System.IO;
using System.Reflection;
using System.Text.Json;
using HotChocolateServer.Schema;

namespace HotChocolateServer.Data
{
    public class AuthorRepository
    {
        public Author[] Authors { get; set; }
        
        public AuthorRepository()
        {
            var jsonData = string.Empty;
            var resourceName = this.GetType().Namespace + ".data.json";

            using (Stream? stm = Assembly.GetExecutingAssembly().GetManifestResourceStream(resourceName)) {
                if (stm != null) {
                    jsonData = new StreamReader(stm).ReadToEnd();
                }
            }

            Authors = JsonSerializer.Deserialize<Author[]>(jsonData, new JsonSerializerOptions()
            {
                PropertyNameCaseInsensitive = true
            }) ?? throw new ArgumentNullException();
        }
    }
}