use async_graphql::{ComplexObject, EmptyMutation, EmptySubscription, ID, Object, Schema, SimpleObject};

use md5;
use uuid::Uuid;
use rand::Rng;
use fake::{self, Fake};

#[derive(SimpleObject)]
pub struct Book {
    pub id: ID,
    pub name: String,
    pub num_pages: i32,
}

#[derive(SimpleObject)]
#[graphql(complex)]
pub struct Author {
    pub id: ID,
    pub name: String,
    pub company: String,
    
    #[graphql(skip)]
    books: Vec<Book>,
}

#[ComplexObject]
impl Author {
    async fn md5(&self) -> String {
        format!("{:x}", md5::compute(self.name.as_bytes()))
    }

    async fn books(&self) -> &Vec<Book> {
        &self.books
    }
}

pub struct QueryRoot;

#[Object]
impl QueryRoot {
    async fn authors(&self) -> Vec<Author> {
        let mut authors: Vec<Author> = vec![];

        for _i in 0..20 {
            let mut books: Vec<Book> = vec![];

            for _i in 0..3 {
                books.push(Book {
                    id: ID(format!("{}", Uuid::new_v4())),
                    name: fake::faker::name::en::LastName().fake(),
                    num_pages: rand::thread_rng().gen_range(100..10000),
                });
            }
            
            authors.push(Author {
                id: ID(format!("{}", Uuid::new_v4())),
                name: fake::faker::name::en::FirstName().fake(),
                company: fake::faker::company::en::Bs().fake(),
                books
            });
        }

        authors
    }
}

pub type ServerSchema = Schema<QueryRoot, EmptyMutation, EmptySubscription>;

pub fn new_schema() -> ServerSchema {
    Schema::new(QueryRoot, EmptyMutation, EmptySubscription)
}