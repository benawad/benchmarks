import faker from "faker";

// that way data is consistent
faker.seed(4321);

function genData() {
  const authors = [];
  for (let i = 0; i < 20; i++) {
    const books = [];

    for (let k = 0; k < 3; k++) {
      books.push({
        id: faker.random.uuid(),
        name: faker.internet.domainName(),
        numPages: faker.random.number(),
      });
    }

    authors.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      company: faker.company.bs(),
      books,
    });
  }

  return authors;
}



export const data = genData();