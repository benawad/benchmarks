use actix_web::web::Data;
use actix_web::{web, App, HttpResponse, HttpServer, Result};

use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};
use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};

mod schema;

async fn index(schema: web::Data<schema::ServerSchema>, req: GraphQLRequest) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}

async fn index_playground() -> Result<HttpResponse> {
    let source = playground_source(GraphQLPlaygroundConfig::new("/graphql"));
    Ok(HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(source))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let schema = schema::new_schema();

    println!("Playground: http://localhost:4001/graphql");

    HttpServer::new(move || {
        App::new()
            .app_data(Data::new(schema.clone()))
            .service(web::resource("/graphql").post(index).get(index_playground))
    })
    .bind("127.0.0.1:4001")?
    .run()
    .await
}
