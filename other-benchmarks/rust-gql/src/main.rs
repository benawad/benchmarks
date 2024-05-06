use axum::{
    response::{self, IntoResponse},
    routing::get,
    Router,
};

use async_graphql::http::GraphiQLSource;
use async_graphql_axum::GraphQL;

use tokio::net::TcpListener;

mod schema;

async fn index_playground() -> impl IntoResponse {
    response::Html(GraphiQLSource::build().endpoint("/graphql").finish())
}

#[tokio::main]
async fn main() {
    let schema = schema::new_schema();

    println!("Playground: http://localhost:4001/graphql");

    let app = Router::new().route(
        "/graphql",
        get(index_playground).post_service(GraphQL::new(schema)),
    );

    axum::serve(TcpListener::bind("127.0.0.1:4001").await.unwrap(), app)
        .await
        .unwrap();
}
